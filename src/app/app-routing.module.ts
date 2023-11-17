import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ProfileComponent } from './users/profile/profile.component';

const routes: Routes = [{path:'',component:LogoutComponent},
  {path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'profile',component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule { }
