import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IGroup} from 'src/models/IGroup';
     
@Injectable()
export class GroupService{
     
    private url = "http://localhost:3000/api/groups";
    constructor(private http: HttpClient){ }
        
    getGroups(){
        return this.http.get<Array<IGroup>>(this.url);
    }
    
    createGroup(group: IGroup){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<IGroup>(this.url, JSON.stringify(group), {headers: myHeaders}); 
    }
    updateGroup(group: IGroup) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<IGroup>(this.url, JSON.stringify(group), {headers:myHeaders});
    }
    deleteGroup(id: string){
     
        return this.http.delete<IGroup>(this.url + '/' + id);
    }
}