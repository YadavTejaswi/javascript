var obj = {
    myfun: function (age) {

        if (age <= 18) {
            console.log("age is Minor - " + age);
        } else {
            console.log("age is major - " + age);
        }
    }
}
console.log(obj.myfun(18));
console.log(obj.myfun(35));