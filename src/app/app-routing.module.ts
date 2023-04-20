import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GroupOverviewComponent } from './forms/group-overview/group-overview.component';
import { StudentOverviewComponent } from './forms/student-overview/student-overview.component';
import { AuthenticationGuard } from './security/authentication.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthenticationGuard], children: [
      { path: 'groups', component: GroupOverviewComponent },
      { path: 'students', component: StudentOverviewComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/students', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
