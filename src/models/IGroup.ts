import { IStudent } from "./IStudent"

export interface IGroup {
    id: number
    name: string
    students: {
        [index: number]: IStudent
    }
}