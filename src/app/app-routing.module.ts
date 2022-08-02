import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

import { ListTaskComponent } from './list-task/list-task.component';
import { ListUsersComponent } from './list-users/list-users.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ViewUserComponent } from './view-user/view-user.component';



const routes: Routes = [

  {path:'register',component:RegisterComponent},

  {path:'login',component:LoginComponent},

  {path:'addtask',component:AddtaskComponent},

  {path:'listtask',component:ListTaskComponent},

  {path:'edit-task',component:EditTaskComponent},

  {path:'view-user',component:ViewUserComponent},

  {path:'users',component:ListUsersComponent}

];




@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }