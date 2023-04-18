import { IStudent } from "../IStudent";

export class Student implements IStudent {
    public id: number
    public name: string
    public birthdate: Date
    public number: number
    constructor(id_: number, name_: string, birthdate_: Date,  number_: number) {
        this.id = id_
        this.name = name_
        this.birthdate = birthdate_
        this.number = number_
    }
}