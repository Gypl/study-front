import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GroupOverviewComponent } from './forms/group-overview/group-overview.component';
import { StudentOverviewComponent } from './forms/student-overview/student-overview.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentOverviewComponent },
  { path: 'groups', component: GroupOverviewComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
