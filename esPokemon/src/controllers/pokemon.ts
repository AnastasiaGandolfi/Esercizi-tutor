import { Request, Response } from "express";
import { Planet, Planets } from "../data/pokemon.js";
import { promises as fs } from "fs";
import * as fsDir from "fs"
import Joi from "joi";
import pgPromise from "pg-promise";

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

const db = pgPromise()("postgres://postgres:dbAccess@localhost:5432/pokemon");
const setupDb = async () => {
  await db.none(`
        DROP TABLE IF EXISTS pokemon;

        CREATE TABLE pokemon(
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            tipo TEXT NOT NULL,
            image TEXt NOT NULL
        )
    `);
  // await db.none(`INSERT INTO PLANETS (name) VALUES ('Earth')`);
  // await db.none(`INSERT INTO PLANETS (name) VALUES ('Mars')`);
  console.log("Database created");
};

/* setupDb();
 */
const getAll = async (req: Request, res: Response) => {
  const planets = await db.many("SELECT * from pokemon");
  res.status(200).json(planets);
};

const getPokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = db.oneOrNone("SELECT * FROM pokemon WHERE id=$1", id);
  res.status(200).json(planet);
};

const create = (req: Request, res: Response) => {
  const { name } = req.body;

  db.none("INSERT INTO pokemon (name) VALUES($1)", name);

  res.status(201).json({ msg: "Pokemon created" });
};

const updatePokemonById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  // isGetOk(req, res, "id", "name");

  db.none("UPDATE pokemon SET name=$2 WHERE id=$1", [id, name]);

  res.status(200).json({ msg: "Pokemon updated" });
};

const deletePokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;
  isGetOk(req, res, "id");
  // ./pokemon/132/front_default.png 
  const imageUrl = await db.one("SELECT image FROM pokemon WHERE id=$1", Number(id))
  const idPokemon = imageUrl.image.split("/")[2]
  if (fsDir.existsSync(`./pokemon/${idPokemon}`)){
    fsDir.rmdirSync(`./pokemon/${idPokemon}`, { recursive: true })
  }
  if (fsDir.readdirSync("./pokemon").length === 0){
    fsDir.rmdirSync(`./pokemon`, { recursive: true })
  }

  db.none("DELETE from pokemon WHERE id=$1", id);

  res.status(200).json({ msg: "Pokemon deleted" });
};

const insertPokemon = async (req: Request, res: Response) => {
  const { pokemonName } = req.body;
  if (!isPostOk(req, res, "pokemonName")) {
    return res.json({ error: "Invalid request" });
  }
  const pokemonRaw = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const { name, sprites, id } = await pokemonRaw.json();
  const urlImage = sprites.front_default
  const response = await fetch(urlImage);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  if (!fsDir.existsSync("./pokemon")){
    fsDir.mkdirSync("./pokemon")
  }
  if (!fsDir.existsSync(`./pokemon/${id}`)){
    fsDir.mkdirSync(`./pokemon/${id}`)
  }
  await fs.writeFile(`./pokemon/${id}/front_default.png`, buffer);
  db.none("INSERT INTO pokemon (name,tipo,image) VALUES ($1, $2, $3)", [name, name, `./pokemon/${id}/front_default.png`]);
  return res.json({ msg: "Pokemon inserito" })
};

const isGetOk = (req: Request, res: Response, ...requiredParams: string[]) => {
  for (let param of requiredParams) {
    if (!req.params[param]) {
      return false;
    }
  }
  return true;
};

const isPostOk = (req: Request, res: Response, ...requiredParams: string[]) => {
  for (let param of requiredParams) {
    if (!req.body[param]) {
      return false;
    }
  }
  return true;
};

export {
  getAll,
  getPokemonById,
  create,
  updatePokemonById,
  deletePokemonById,
  insertPokemon,
};
