function random() {
    
}


const p = new Promise(random);// supposed to return u something eventually

function callback() {
    console.log("promise succeded");
    
}

p.then(callback)
//

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)
  