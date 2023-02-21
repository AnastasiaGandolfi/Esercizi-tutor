fetch("https://comuni-istat-api.belicedigital.com/api/regioni")
  .then((res) => res.json())
  .then((regioni) => {
    printProvince(regioni);
  })
  .catch((error) => console.error(error));

function printProvince(regioni) {
  let promiseList = [];
  for (let regione of regioni) {
    promiseList.push(
      fetch(
        `https://comuni-istat-api.belicedigital.com/api/province/${regione}`
      ).then((res) => res.json())
    );
  }

  let rp = [];
  Promise.all(promiseList)
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        rp[regioni[i]] = res[i];
      }
      console.log(rp);
    })
    .catch((error) => console.error(error));
}

//https://comuni-istat-api.belicedigital.com/api/regione/Lombardia/comuni
//province comuni