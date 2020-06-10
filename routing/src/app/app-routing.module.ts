import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component'; 
import { DepartmentDetailComponent} from './department-detail/department-detail.component'
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
 

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'test', redirectTo: 'departments-list', pathMatch:'prefix'},
  { path: 'departments-list', component: DepartmentListComponent},
  { 
    path: 'departments-list/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,
                                DepartmentListComponent,
                                DepartmentDetailComponent,
                                DepartmentContactComponent,
                                DepartmentOverviewComponent,
                                EmployeeListComponent,
                                PageNotFoundComponent ] 
