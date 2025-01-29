//  Normal function in JS 

function Sum(a,b){
    return a+b
}

let ans1 = Sum(5,5)
console.log(ans1);

// Find sum from 1 to given n numbers 

function sum1(n){
    let ans=0;
    for(let i=1; i<=n; i++){
        ans = ans+ i
    }
    return ans;
}

const ans = sum1(100);
console.log(ans);

const { log } = require('console');

//SYNCHRONOUS CODE 
//Synchronous code is executed line by line, in the order it's written. Each operation waits 
//for the previous one to complete before moving on to the next one.
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans7 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);



// I/O Heavy Operations ( this refers to transfer of data between the programm and external sources)
// examples HTTP Requests, Reading files, Starting a clock


const fs = require('fs')

const data = fs.readFileSync('msg.txt','utf8');
console.log(data); // Syncronous code

const datab = fs.readFileSync('dm.txt','utf8');
console.log(datab);// Syncronous code 

// firstly the msg.txt is execuded and then dm.txt is execuded due to it's JS thread nature

// Asyncronous code, callbacks 
//Let’s look at the code to read from a file asynchronously. Here,
//we pass in a function as an argument, what is an arrgument? (function ander function)

const fsA = require('fs')

function read(err, data){
      console.log(data);
      }
const Adata = fsA.readFile('msg.txt','utf8',read);
console.log(Adata); // ASyncronous code

const Adatab = fsA.readFile('dm.txt','utf8',read);
console.log(Adatab);// ASyncronous code 

// the task as bean started the file is being read when the task is done,
// the washing machine start peping similarly this Asynchronus function callback
//the third arrgument is called 
// by change a bit in code, we have a alots performances benefits

// irrespective of thread nature JS , amoung (two function) either one will
// read first will callback the third arrgument and excecuted code 

//Call Back code 
function read(err, data){
    if (err) {
        console.log("file not found");
        
    }   else{
        console.log(data);
        
    }
    }
// under the hood of callBack function read

