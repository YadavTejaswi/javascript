let color = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
};
// typeOne
var result = Object.keys(color).map((key) => [(key), color[key]]);
console.log(result);

// typeTwo
console.log(Object.entries(color));
