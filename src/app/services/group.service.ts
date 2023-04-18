import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IGroup} from 'src/models/IGroup';
     
@Injectable()
export class GroupService{
     
    private url = "http://localhost:8080/api/groups";
    constructor(private http: HttpClient){ }
        
    getGroups(){
        return this.http.get<Array<IGroup>>(this.url);
    }
    
    createGroup(group: IGroup){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<IGroup>(this.url + '/create', JSON.stringify(group), {headers: myHeaders}); 
    }
    updateGroup(group: IGroup) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<IGroup>(this.url + '/update/' + group.id, JSON.stringify(group), {headers:myHeaders});
    }
    deleteGroup(id: number){
     
        return this.http.delete<IGroup>(this.url + '/delete/' + id);
    }
}