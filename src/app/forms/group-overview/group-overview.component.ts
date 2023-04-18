import {TemplateRef, ViewChild} from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/models/entityes/group';
import { Student } from 'src/models/entityes/student';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.scss']
})
export class GroupOverviewComponent  implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate', { static: false })
  readOnlyTemplate!: TemplateRef<any> | null;
  @ViewChild('editTemplate', { static: false })
  editTemplate!: TemplateRef<any> | null;

  public editedGroup: Group = new Group(0, "", new Array<Student>)
  groups: Array<Group>
  isNewRecord: boolean = false
  statusMessage: string = ""
  
  constructor(private serv: GroupService) {
    this.groups = new Array<Group>()
  }

  ngOnInit() {
    this.loadGroups()
  }

  //Загрузка групп
  private loadGroups() {
    this.serv.getGroups().subscribe((data: Array<Group>) => {
      this.groups = data
    })
  }

  // добавление группы
  addGroup() {
    this.editedGroup = new Group(0, "", new Array<Student>);
    if (this.isNewRecord === false)
        this.groups.push(this.editedGroup);
    this.isNewRecord = true;
}
 
// редактирование группы
editGroup(group: Group) {
    this.editedGroup = new Group(group.id, group.name, group.students);
}
// загружаем один из двух шаблонов
loadTemplate(group: Group) {
    if (this.editedGroup && this.editedGroup.id === group.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
}
// сохраняем группы
saveGroup() {
    if (this.isNewRecord) {
        // добавляем группы
        this.serv.createGroup(this.editedGroup as Group).subscribe(_ => {
            this.statusMessage = 'Данные успешно добавлены',
            this.loadGroups();
        });
        this.isNewRecord = false;
        this.editedGroup = new Group(0, "", new Array<Student>);
    } else {
        // изменяем группы
        this.serv.updateGroup(this.editedGroup as Group).subscribe(_ => {
            this.statusMessage = 'Данные успешно обновлены',
            this.loadGroups();
        });
        this.editedGroup = new Group(0, "", new Array<Student>);
    }
}
// отмена редактирования
cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
        this.groups.pop();
        this.isNewRecord = false;
    }
    this.editedGroup = new Group(0, "", new Array<Student>);
}
// удаление группы
deleteGroup(group: Group) {
    this.serv.deleteGroup(group.id).subscribe(_ => {
        this.statusMessage = 'Данные успешно удалены',
        this.loadGroups();
    });
}
}

