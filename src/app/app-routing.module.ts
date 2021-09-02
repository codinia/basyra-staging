import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './user-ui/about/about.component';
import { BuyPropertyComponent } from './user-ui/buy-property/buy-property.component';
import { ContactComponent } from './user-ui/contact/contact.component';
import { HomeComponent } from './user-ui/home/home.component';
import { LoginComponent } from './user-ui/login/login.component';
import { PostPropertyComponent } from './user-ui/post-property/post-property.component';
import { RegisterComponent } from './user-ui/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'post-property',component:PostPropertyComponent},
  {path:'buy-property',component:BuyPropertyComponent},
  {path:'Registration',component:RegisterComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
