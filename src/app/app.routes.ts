import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login-component/login-component';
import { RegisterComponent } from './modules/register/register-component/register-component';

export const routes: Routes = [
    //default
    {path : '', component: RegisterComponent},

    //login
    {path:'login', component: LoginComponent}

];
