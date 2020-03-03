import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetireComponent } from './features/Retire/retire.component';

const routes: Routes = [
  {path: 'retire/:id', component: RetireComponent},
  {path: '', component: RetireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
