let colors = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
};
var results = Object.keys(colors).map((key) => [colors[key], (key)]);
console.log(results);