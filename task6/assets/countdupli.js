let arry = ["a", 2, "b", "c", "s", 5, 7, 8, "s", "b", 5];
let count ={};
arry.forEach((x) =>{
    count[x] = (count[x] || 0) + 1;
});
console.log(count);

/////////////////////////////////////////////////
let unique = [...new Set(arry)];
let dupli = unique.map(value=> [value, arry.filter(str=> str === value).length]);
console.log(dupli);

//////////////////////////////

function dupliVal(a){
    let count={};
for (let i=0; i<arry.length; i++){
    if(count[arry[i]]){
        count[arry[i]] += 1
    }else{
        count[arry[i]]=1
    }
}
for (let val in count){
    if(count[this.val]>=2){
        console.log(val + " " + count[val]+ "<br>")
    }
}
console.log(count)
}
dupliVal(arry);
