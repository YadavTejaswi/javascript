
//  Arithmetic operators 

let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  

// subtraction
console.log('x - y = ', x - y);  

// multiplication
console.log('x * y = ', x * y);  

// division
console.log('x / y = ', x / y);  

// remainder
console.log('x % y = ', x % y);   

// increment
console.log('++x = ', ++x); 
console.log('x++ = ', x++);
console.log('x = ', x);     

// decrement
console.log('--x = ', --x); 
console.log('x-- = ', x--);
console.log('x = ', x);     

//exponentiation
console.log('x ** y =', x ** y);


// assignment Operators

let c= 10;

// addition
 console.log('c + c = ', c += 20);

 // subtraction
console.log('c -  c= ', c -= 20);  

// multiplication
console.log('c * c = ',  c *= 20);  

// division
console.log('c / c = ', c /= 20);  

// remainder
console.log('c % c = ', c %= 20); 



// Comparison Operators

const a = 3, b = 2;
console.log(a > b);
console.log(a < b);



// equal operator
console.log(2 == 2);
console.log(2 == '2');

// not equal operator
console.log(3 != 2);
console.log('hello' != 'Hello');

// strict equal operator
console.log(2 === 2);
console.log(2 === '2'); 

// strict not equal operator
console.log(2 !== '2');
console.log(2 !== 2); 


// Logical Operators

const p = 5, q = 3;
console.log((p < 6) && (q < 5));

// logical AND
console.log(true && true); 
console.log(true && false); 

// logical OR
console.log(true || false); 

// logical NOT
console.log(!true);



// function with parameter

function disp(name){
    console.log(name);
}
disp("ram");


// function with argument

function add(a, b, c){
    console.log("a: " +a+ " b: " +b+ " c: " +c);
}
add(10, 20);


// default parameter

function add(a, b, c=30){
    console.log("a: " +a+ " b: " +b+ " c: " +c);
}
add(10, 20);

// function declaration

show();
function show(){
    console.log("hello");
}

// function expression


function shows(){
    console.log("hello world");
}
shows();


//  arrow function

var myfun =() =>{
   console.log("this is arrow fun"); 
}
myfun();

//  arrow function with parameter

var para =(a)=>{
    console.log(a)
}
para(20);

//  arrow function with  default parameter

var para =(a, b=10)=>{
    console.log(a + " " +b)
}
para(20);


// template literal

var d=10;
var e=15;
var f="this is tamplate literal";

console.log(`${d} and ${e} and ${f} and ${8+9}`)

// function with tamplate literal

function tamp(say){
    return say;
}
console.log(`${tamp("This is a function with tamplate literal")}`)





