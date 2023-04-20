import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/models/entityes/group';
import { Student } from 'src/models/entityes/student';
import { DialogData } from '../group-overview/group-overview.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-group-students-dialog',
  templateUrl: './group-students-dialog.component.html',
  styleUrls: ['./group-students-dialog.component.scss'],
  providers: [GroupService]
})
export class GroupStudentsDialogComponent implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate', { static: false })
  readOnlyTemplate!: TemplateRef<any> | null;
  @ViewChild('readOnlyTemplate2', { static: false })
  readOnlyTemplate2!: TemplateRef<any> | null;
  @ViewChild('editTemplate', { static: false })
  editTemplate!: TemplateRef<any> | null;

  public editedGroup: Group = new Group(0, "", [])
  public editedStudent: Student = new Student(0, "", new Date(), 0)
  students: Array<Student>
  isNewRecord: boolean = false
  statusMessage: string = ""
  chosenGroupId: number = -1
  chosenStudentId: number = -1


  constructor(private serv: GroupService) {
    this.students = new Array<Student>()
    this.serv.getGroupById().subscribe((data: Group) => {
      this.editedGroup = data
    })
  }

  ngOnInit() {
    this.loadStudents()
  }

  //Загрузка студентов
  private loadStudents() {
    this.serv.getGroupById().subscribe((data: Group) => {
      this.students = data.students
    })
  }
  // загружаем один из двух шаблонов
  loadStudentsTemplate(student: Student) {
    if (this.editedGroup && this.editedGroup.id === student.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  // Переместить студента
  moveStudentToUs(studentId: number) {
    this.serv.moveStudent(studentId);
  }
  // сохраняем группы
  saveGroup() {
    // изменяем группы
    this.serv.updateGroup(this.editedGroup as Group).subscribe(_ => {
      this.statusMessage = 'Данные успешно обновлены',
        this.loadStudents();
    });
    this.editedGroup = new Group(0, "", []);

  }
  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.isNewRecord = false;
    }
    this.editedGroup = new Group(0, "", []);
  }
}
