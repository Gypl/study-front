import { IStudent } from "./student"

export interface IGroup {
    id: number
    name: string
    students: {
        [index: number]: IStudent
    }
}