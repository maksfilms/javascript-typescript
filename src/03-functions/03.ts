import {StudentType} from "../02-objects/02-02/02";
import {student} from "./03.test";


export function addSkill(s: StudentType, skill: string) {
    student.technologies.push({id: 5, title: skill})
}

export function deactivateStudent(student: StudentType, value: boolean) {
    student.isActive = value;
}

export const addNumberHouse = (student: StudentType, value: number) => {
    student.address.city.house = value;
}