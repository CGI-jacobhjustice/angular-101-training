import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './hello/goodbye.component';


const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path:'goodbye', component: GoodbyeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
