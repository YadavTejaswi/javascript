var fee = {
    Rahul: 200,
    Sumit: 300,
    "Rohit kumar": 400,
    total: function(){ return(200+300+400);}
}
console.log(fee);
console.log(fee.Rahul);
console.log(fee["Rohit kumar"]);
console.log(fee.Sumit);
console.log(fee.Rahul+" "+fee.Sumit);
console.log(fee.total());

// key method
console.log(Object.keys(fee));

// value method
console.log(Object.values(fee));

// assign method
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(target);
console.log(source);
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(source);
console.log(returnedTarget);

// delete value in object
delete fee.Rahul;
console.log(fee);