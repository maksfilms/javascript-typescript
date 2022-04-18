//use typescript for typing the object


type TechType = {
    id: number
    title: string
}

type LocalCityType = {
    house?: number;
    title: string
    street: string
}

type AddressType = {
    country: string
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}

export const student: StudentType = {
    id: 1,
    name: "Maksim",
    age: 31,
    isActive: true,
    address: {
        country: "Belarus",
        city: {
            title: "Minsk",
            street: "Surganova"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS"},
        {id: 4, title: "React"},
    ]
}

console.log(student.address.city);
console.log(student.technologies[3].title)