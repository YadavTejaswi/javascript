var a = "xyz";
var arr = ["neha", "ram", "sonam", "sumit", "sohan"];
console.log(arr);
if (arr.includes(a)) {
    console.log("duplicate");
} else {
    console.log("not-matched");
    arr.push(a);

}
console.log(arr);