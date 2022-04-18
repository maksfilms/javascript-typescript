import {StudentType} from "../02-objects/02-02/02";
import {addNumberHouse, addSkill, deactivateStudent} from "./03";


export let student: StudentType;

beforeEach( () => {
    student = {
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
})

test("New skill should be added to student", () => {
    addSkill(student, 'NodeJS');

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("NodeJS")
    expect(student.technologies[4].id).toBeDefined();
})

test("Student should not active", () => {
    deactivateStudent(student, false);

    expect(student.isActive).toBe(false);
})

test('Number of the house should be added', () => {
    addNumberHouse(student, 50);

    expect(student.address.city.house).toBe(50); //function
})


