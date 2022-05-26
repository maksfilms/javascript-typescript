import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}
// DESTRUCTING OBJECTS
/*const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...rest} = props; // get title from props (PropsType) rest не обязательно

    return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    )
}*/

/*
const ManComponent: React.FC<PropsType> = ({title, man, ...rest}) => { //rest остаток

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
                {rest.car.model}
                {rest.food}
            </div>
        </div>
    )
}*/

//DISTRACTING ARRAYS

let lessons = [
    {title: '1'},
    {title: '2'},
    {title: '3'},
    {title: '4'},
]

const first = lessons[0]
const second = lessons[1]
//or
const [firs, sec] = lessons

const [,,third] = lessons // 3 element from array
const [,a] = lessons // 2 element from array

const [firstLesson, ...restLessons] = lessons // 1 element and rest elements

///

let someVariable = {
    name: 'Max',
    age: 32,
    lessonsMy: [{title: "1"}, {title: 2}],
    address: {
        street: {
            title: 'BroadWay'
        }
    }
}

/*let {name, lessonsMy} = someVariable //name = 'Max', age
const {title} = someVariable.address.street*/

let {name, address: {street}} = someVariable // забираем name и street у adress

let {name: vorname, age: alter} = someVariable // записали name в vorname и age в alter
//vorname = Max
//alter = 32
