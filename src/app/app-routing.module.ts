import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetireComponent } from './features/Retire/retire.component';
import { AllComponent } from './features/All/all.component';
import { DetailsComponent } from './features/Details/details.component';

const routes: Routes = [
  {path: 'details/:id', component: DetailsComponent},
  {path: 'retire/:id', component: RetireComponent},
  {path: 'all', component: AllComponent},
  {path: '', component: AllComponent},
  {path: '*', component: AllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
