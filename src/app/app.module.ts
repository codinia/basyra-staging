import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user-ui/header/header.component';
import { FooterComponent } from './user-ui/footer/footer.component';
import { HomeComponent } from './user-ui/home/home.component';
import { ContactComponent } from './user-ui/contact/contact.component';
import { AboutComponent } from './user-ui/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostPropertyComponent } from './user-ui/post-property/post-property.component';
import { BuyPropertyComponent } from './user-ui/buy-property/buy-property.component';
import { RegisterComponent } from './user-ui/register/register.component';
import { LoginComponent } from './user-ui/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PostPropertyComponent,
    BuyPropertyComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
