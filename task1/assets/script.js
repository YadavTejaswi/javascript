// var scope

function myfun() {
    var a = 10;
    if (true) {
        var a = 20;
        console.log(a);
    }
    console.log(a);


}
myfun();

// let scope

function myfun2() {
    let b = 30;
    if (true) {
        let b = 40;
        console.log(b);
    }
    console.log(b);
}
myfun2();



// const

const c = 50;
console.log(c);
// c = 60;
// console.log(c);



// object

var fee = {
    Ram: 100,
    Sumit: 200,
    Rohan: 300,

    total: function () {
        return (100 + 200 + 300);
    }
}

console.log(fee);
console.log(fee.total());

// Array

var arr = ["rahul", "puja", "sonam", 3, 6];
console.log(arr);
console.log(typeof(arr));
console.log(typeof(arr[3]));
 
arr[1] = "neha";
console.log(arr);

delete arr[4];
console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr.indexOf("sonam"));


// Boolean

var bool = Boolean();
console.log(bool);

var bool = Boolean(0);
console.log(bool);

var bool = Boolean(10);
console.log(bool);
console.log(typeof(bool));


var bool = Boolean("hello");
console.log(bool);



// string

var str = "hello world";
console.log(str);
console.log(typeof(str));


// adding
console.log(3+2);
console.log("hi");


// undefiend

var u;
console.log(u);


// null

var n= null;
console.log(n);