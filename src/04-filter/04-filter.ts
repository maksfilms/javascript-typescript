export {};

let users = [
    {name: "Max", age: 23},
    {name: "Alex", age: 44},
    {name: "Bob", age: 34},
    {name: "Kate", age: 76},
    {name: "Nata", age: 87}
]

const filtered = users.filter(e => e.age > 60)

console.log(filtered)
