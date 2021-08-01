import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LogInComponent } from '../components/user-SignIn-up/log-in/log-in.component'
import { RegisterComponent } from '../components/user-SignIn-up/register/register.component';
import { AddPropertyComponent } from '../components/add-property/add-property.component';

const routes : Routes = [
  {path:'home', component: HomeComponent },
 
  
  {path:'add', component: AddPropertyComponent},
  {path:'', pathMatch:'full', redirectTo:'/home'},
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
