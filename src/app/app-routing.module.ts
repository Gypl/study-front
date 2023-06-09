import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GroupOverviewComponent } from './forms/group-overview/group-overview.component';
import { GroupStudentsDialogComponent } from './forms/group-students-dialog/group-students-dialog.component';
import { StudentOverviewComponent } from './forms/student-overview/student-overview.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'groups/edit', component: GroupStudentsDialogComponent }
    ]
  },
  { path: 'login',  component: LoginPageComponent },
      { path: 'groups', component: GroupOverviewComponent },
      { path: 'students', component: StudentOverviewComponent },
      { path: '', redirectTo: '/students', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
