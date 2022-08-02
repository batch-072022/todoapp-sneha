import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AddtaskComponent } from './addtask/addtask.component';

import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddtaskComponent,
    HeaderComponent,
    ListTaskComponent,
    EditTaskComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ViewProfileComponent,
    ListUsersComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
