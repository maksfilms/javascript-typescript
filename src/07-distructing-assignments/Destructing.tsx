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