var arr = [2, 5, 7, [1, 3, 4],[4, 5, [6, 9, [2, 4]]]];

// nested Array
// typeOne
var a = arr.flat(Infinity);
console.log(a);

// typeTwo
const flatten = (arr) => {
    var newArr = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flatten(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, [])
    return newArr;
}
console.log(flatten(arr));



















