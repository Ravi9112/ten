import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringComponent } from './hiring/hiring.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { OnlinecoursesComponent } from './onlinecourses/onlinecourses.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Onlinecourses',component:OnlinecoursesComponent},
  {path:'Hiring',component:HiringComponent},
  {path:'More',component:MoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
