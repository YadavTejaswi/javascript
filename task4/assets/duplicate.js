const users = [
    { name: "John", age : 42},
    { name: "Alex", age : 42},
    { name: "smriti", age : 26},
    { name: "kashi", age : 21},
    { name: "Doe", age : 33},
    { name: "user", age : 15}
    ];

var dupliusers = {};
for(var i = 0; i < users.length; i++) {
    if(dupliusers[users[i].age]) {
        dupliusers[users[i].age].push(users[i].name);
    } else {
        dupliusers[users[i].age] = [users[i].name];
    }
}
console.log ((dupliusers));
