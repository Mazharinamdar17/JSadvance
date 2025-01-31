function random() {
    
}


const p = new Promise(random);// supposed to return u something eventually

function callback() {
    console.log("promise succeded");
    
}

p.then(callback)
