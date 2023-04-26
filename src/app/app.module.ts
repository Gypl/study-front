import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentOverviewComponent } from './forms/student-overview/student-overview.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GroupOverviewComponent } from './forms/group-overview/group-overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { GroupStudentsDialogComponent } from './forms/group-students-dialog/group-students-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupService } from './services/group.service';
import { StudentService } from './services/student.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BasicAuthInterceptor } from './security/basic-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StudentOverviewComponent,
    GroupOverviewComponent,
    NavBarComponent,
    PageNotFoundComponent,
    LoginComponent,
    GroupStudentsDialogComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [GroupService, StudentService, { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
