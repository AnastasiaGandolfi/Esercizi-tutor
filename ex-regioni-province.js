// fetch("https://comuni-istat-api.belicedigital.com/api/comuni")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

async function getRegioni() {
  const regioniConProvince = [];

  const regioni = await fetch(
    "https://comuni-istat-api.belicedigital.com/api/regioni"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  for (let regione of regioni) {
    await fetch(
      `https://comuni-istat-api.belicedigital.com/api/province/${regione}`
    )
      .then((res) => res.json())
      .then((val) => (regioniConProvince[regione] = val))
      .catch((err) => console.error(err));
  }
  return regioniConProvince;
}

getRegioni()
  .then((obj) => console.log(obj))
  .catch((err) => console.error(err));
