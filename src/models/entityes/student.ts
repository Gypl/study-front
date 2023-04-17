import { IStudent } from "../IStudent";

export class Student implements IStudent {
    public id: number
    public name: string
    public birthday: Date
    public number: number
    constructor(id_: number, name_: string, birthday_: Date, number_: number) {
        this.id = id_
        this.name = name_
        this.birthday = birthday_
        this.number = number_
    }
}