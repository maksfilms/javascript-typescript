export

let users = [
    {id: 1, name: "Max", age: 23, isMarried: true},
    {id: 2, name: "Alex", age: 44, isMarried: false},
    {id: 3, name: "Bob", age: 34, isMarried: true},
    {id: 4, name: "Kate", age: 76, isMarried: false},
    {id: 5, name: "Nata", age: 87, isMarried: false}
]

const TestMap = () => {
    return(
        <ol>
            {users.map(e => <li key={e.id}>{`Hello my friend ${e.name}! Your age is ${e.age}`}</li>)}
        </ol>
    )
}

