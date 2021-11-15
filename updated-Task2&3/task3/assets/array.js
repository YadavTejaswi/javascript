// array

var arr = ["ram", "mohan", 5, 9, "neha"];
console.log(arr);


// array with new keyword

var ar = new Array(1, 4, "raja", "neetu");
console.log(ar);


// array methods

// modifying array

arr[2] = "priya";
console.log(arr);

arr[2] = 8;
console.log(arr);


// removing array element

delete ar[0];
console.log(ar);

// length

console.log(arr.length);


// find last element in array

// typeOne

var lastElement = arr[arr.length - 1];
console.log(lastElement);

// typeTwo

var lastElement = arr.slice(-1);
console.log(lastElement);

// typeThree

var lastElement = arr.pop();
console.log(lastElement);



// push and pop

arr.push("rina");
console.log(arr);

arr.pop();
console.log(arr);

// shift and unshift

arr.shift();
console.log(arr);

arr.unshift("sumit");
console.log(arr);


// fill

// arr.fill("sonam");
// console.log(arr);

// arr.fill("sona", 1, 3);
// console.log(arr);


// indexOf

var b = arr.indexOf("raj");
console.log(b);

var b = arr.indexOf(8);
console.log(b);


// lastindexof

var l = arr.lastIndexOf("mohan");
console.log(l);

// concate

var new_arr = arr.concat(ar);
console.log(new_arr);


// join

var j = arr.join("/");
console.log(j);


// reverse

// withreverse method

ar.reverse();
console.log(ar);

// without reverse method

for(var i= arr.length-1; i>=0; i--){
    console.log(arr[i]);

}

// isarray

var result = Array.isArray(arr);
console.log(result);

var res= Array.isArray("This is a string");
console.log(res);


// sort

console.log(arr.sort());


// include
var i= arr.includes("mohan")
console.log(i);


// some
var ages = [10, 20, 35, 50];
console.log(ages);

var s = ages.some(checkAge);
console.log("some "+s);

function checkAge(age){
    return age>= 18;

}

// every

var e = ages.every(checkAge);
console.log("every" +e);

function checkAge(age){
    return age>= 18;

}

// find
var f = ages.find(checkAge);
console.log("find "+f);


function checkAge(age){
    return age>= 18;

}

// findindex
var fi = ages.findIndex(checkAge);
console.log(fi);

function checkAge(age){
    return age>= 18;

}


// reduce
var red = [10, 30, 40]

total = red.reduce((total,num)=>total + num,10);
console.log(total);


// filter

var fil = ages.filter(checkAge);
console.log(fil);

function checkAge(age){
    return age>= 18;

}

// map

var m =[2,3,4,5];

const map1 = m.map(x => x * 2);
console.log(map1);

// foreach
m.forEach(element => console.log(element));


// slice
var new_s= arr.slice(1,3);
console.log(new_s);

var new_s= arr.slice(-4, -1);
console.log(new_s);

var new_s= arr.slice(undefined,1);
console.log(new_s);







