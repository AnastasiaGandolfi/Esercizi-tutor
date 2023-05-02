/* const func = async () => {
    const x = await ciccioSync("")
    console.log(x)
}

const ciccioSync = async (val) => {
    try{
        if (val.length > 0){
            return val
        }else{
            throw Error("")
        }
    } catch (error){
        return "errore"
    }
} */


Promise.all(
    [
    new Promise((resolve, reject) => {resolve("Some")}),
    new Promise((resolve, reject) => {resolve("Some")}),
    new Promise((resolve, reject) => {resolve("Some")}),
    new Promise((resolve, reject) => {resolve("Some")}),
    ]
).then((val) => console.log(val)).catch((error) => console.log("error"))