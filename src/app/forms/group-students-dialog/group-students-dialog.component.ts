import { Input, TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/models/entityes/group';
import { Student } from 'src/models/entityes/student';
import { DialogData } from '../group-overview/group-overview.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-group-students-dialog',
  templateUrl: './group-students-dialog.component.html',
  styleUrls: ['./group-students-dialog.component.scss']
})
export class GroupStudentsDialogComponent implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate', { static: false })
  readOnlyTemplate!: TemplateRef<any> | null;
  @ViewChild('studentAddingTemplate', { static: false })
  studentAddingTemplate!: TemplateRef<any> | null;

  public editedGroup: Group = new Group(0, "", [])
  public editedStudent: Student = new Student(0, "", new Date(), 0)
  groupStudents: Array<Student>
  allStudents: Array<Student>
  isNewRecord: boolean = false
  flag: boolean = false
  statusMessage: string = ""


  constructor(private serv: GroupService, private servSt: StudentService) {
    this.groupStudents = new Array<Student>()
    this.allStudents = new Array<Student>()
  }

  ngOnInit() {
    this.loadStudents()
    console.log(this.serv.getId())
  }

  //Загрузка студентов
  private loadStudents() {
    this.serv.getGroupById(this.serv.getId()).subscribe((data: Group) => {
      this.editedGroup = data
      this.groupStudents = data.students
    })
    this.servSt.getStudents().subscribe((data: Array<Student>) => {
      this.allStudents = data
    })
  }
  // загружаем один из двух шаблонов
  loadStudentsTemplate(student: Student) {
    this.flag = false
    this.groupStudents.forEach(st => {
      if (student.id === st.id) {
        this.flag = true
      }
    })
    if (this.flag) {
      return this.readOnlyTemplate;
    } else
      return this.studentAddingTemplate;
  }

  // Переместить студента
  moveStudentToUs(studentId: number) {
    this.serv.moveStudent(this.serv.getId(), studentId).subscribe(_ => {
      this.statusMessage = 'Студент успешно переведён',
        this.loadStudents();
    });
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
