import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetireComponent } from './features/Retire/retire.component';
import { AllComponent } from './features/All/all.component';
import { DetailsComponent } from './features/Details/details.component';
import { EditComponent } from './features/Edit/edit.component';
import { EmployeeComponent } from './features/Employee/employee.component';

const routes: Routes = [
  {path: 'details/:id', component: DetailsComponent},
  {path: 'retire/:id', component: RetireComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'employee/:id', component: EmployeeComponent},
  {path: 'all', component: AllComponent},
  {path: '', component: AllComponent},
  {path: '*', component: AllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
