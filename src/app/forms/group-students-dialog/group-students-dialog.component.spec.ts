import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStudentsDialogComponent } from './group-students-dialog.component';

describe('GroupStudentsDialogComponent', () => {
  let component: GroupStudentsDialogComponent;
  let fixture: ComponentFixture<GroupStudentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupStudentsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupStudentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
