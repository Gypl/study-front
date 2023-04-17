import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStudent} from 'src/models/IStudent';
     
@Injectable()
export class StudentService{
     
    private url = "http://localhost:3000/api/students";
    constructor(private http: HttpClient){ }
        
    getStudents(){
        return this.http.get<Array<IStudent>>(this.url);
    }
    
    createStudent(student: IStudent){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<IStudent>(this.url, JSON.stringify(student), {headers: myHeaders}); 
    }
    updateStudent(student: IStudent) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<IStudent>(this.url, JSON.stringify(student), {headers:myHeaders});
    }
    deleteStudent(id: number){
     
        return this.http.delete<IStudent>(this.url + '/delete/' + id);
    }
}