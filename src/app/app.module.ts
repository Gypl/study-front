import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    StudentOverviewComponent,
    GroupOverviewComponent,
    NavBarComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
