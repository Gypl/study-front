import { IGroup } from "../IGroup";
import { IStudent } from "../IStudent";
import { Student } from "./student";

export class Group implements IGroup {
    public id: number;
    public name: string;
    public students: { [index: number]: Student; };

    constructor(id_: number, name_: string, students_: { [index: number]: Student; }) {
        this.id = id_
        this.name = name_
        this.students = JSON.parse(JSON.stringify(students_))
    }
}