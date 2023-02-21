function cb(callback){
    setTimeout((callback), 1000)
    console.log("ciao")
}

cb(() => console.log("addio"));