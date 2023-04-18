import {TemplateRef, ViewChild} from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/models/entityes/student';

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss'],
  providers: [StudentService]
})
export class StudentOverviewComponent implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate', { static: false })
  readOnlyTemplate!: TemplateRef<any> | null;
  @ViewChild('editTemplate', { static: false })
  editTemplate!: TemplateRef<any> | null;

  public editedStudent: Student = new Student(0, "", new Date(), 0)
  students: Array<Student>
  isNewRecord: boolean = false
  statusMessage: string = ""

  constructor(private serv: StudentService) {
    this.students = new Array<Student>()
  }

  ngOnInit() {
    this.loadStudents()
  }

  //Загрузка студентов
  private loadStudents() {
    this.serv.getStudents().subscribe((data: Array<Student>) => {
      this.students = data
    })
  }

  // добавление пользователя
  addStudent() {
    this.editedStudent = new Student(0, "", new Date(), 0);
    if (this.isNewRecord === false)
        this.students.push(this.editedStudent);
    this.isNewRecord = true;
}
 
// редактирование пользователя
editStudent(student: Student) {
    this.editedStudent = new Student(student.id, student.name, student.birthdate, student.number);
}
// загружаем один из двух шаблонов
loadTemplate(student: Student) {
    if (this.editedStudent && this.editedStudent.id === student.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
}
// сохраняем пользователя
saveStudent() {
    if (this.isNewRecord) {
        // добавляем пользователя
        this.serv.createStudent(this.editedStudent as Student).subscribe(_ => {
            this.statusMessage = 'Данные успешно добавлены',
            this.loadStudents();
        });
        this.isNewRecord = false;
        this.editedStudent = new Student(0, "", new Date(), 0);
    } else {
        // изменяем пользователя
        this.serv.updateStudent(this.editedStudent as Student).subscribe(_ => {
            this.statusMessage = 'Данные успешно обновлены',
            this.loadStudents();
        });
        this.editedStudent = new Student(0, "", new Date(), 0);
    }
}
// отмена редактирования
cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
        this.students.pop();
        this.isNewRecord = false;
    }
    this.editedStudent = new Student(0, "", new Date(), 0);
}
// удаление пользователя
deleteStudent(student: Student) {
    this.serv.deleteStudent(student.id).subscribe(_ => {
        this.statusMessage = 'Данные успешно удалены',
        this.loadStudents();
    });
}
}
