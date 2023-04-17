import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStudent} from 'src/models/IStudent';
import { Student } from 'src/models/entityes/student';
     
@Injectable()
export class StudentService{
     
    private url = "http://localhost:8080/api/students";
    constructor(private http: HttpClient){ }
        
    getStudents(){
        return this.http.get<Array<Student>>(this.url);
    }
    
    createStudent(student: Student){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Student>(this.url + '/create', JSON.stringify(student), {headers: myHeaders}); 
    }
    updateStudent(student: Student) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Student>(this.url + '/update/' + student.id, JSON.stringify(student), {headers:myHeaders});
    }
    deleteStudent(id: number){
     
        return this.http.delete<Student>(this.url + '/delete/' + id);
    }
}