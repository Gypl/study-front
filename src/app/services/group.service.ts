import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IGroup} from 'src/models/IGroup';
import { Group } from 'src/models/entityes/group';
     
@Injectable()
export class GroupService{
     
    private url = "http://localhost:8080/api/groups";
    private chosenGroupId: number = 1;
    constructor(private http: HttpClient){ }
        
    getGroups(){
        return this.http.get<Array<Group>>(this.url);
    }
    
    createGroup(group: Group){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Group>(this.url + '/create', JSON.stringify(group), {headers: myHeaders}); 
    }
    updateGroup(group: Group) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Group>(this.url + '/update/' + group.id, JSON.stringify(group), {headers:myHeaders});
    }
    deleteGroup(id: number){
     
        return this.http.delete<Group>(this.url + '/delete/' + id);
    }
    getGroupById(id_: number){
        return this.http.get<Group>(this.url + '/id/' + id_);
    }
    moveStudent(id_: number, studentId: number){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Group>(this.url + "/" + id_ + "/students/" + studentId + "/move", JSON.stringify(""), {headers: myHeaders});
    }

    getId() {
        return this.chosenGroupId;
    }
    setId(id_: number) {
        this.chosenGroupId = id_;
    }
}