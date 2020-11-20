import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from '../app/components/login/login.component';
import {RegisterComponent} from '../app/components/register/register.component';
import {ForgotPasswordComponent} from '../app/components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from '../app/components/verify-email/verify-email.component';
import {AuthService} from '../app/services/auth.service';
import {ClientesComponent} from '../app/components/cliente/clientes/clientes.component';
import {VeterinarioComponent} from '../app/components/veterinario/veterinario.component';
import {AuthGuard} from '../app/shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Clientes', component: ClientesComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'veterinario', component: VeterinarioComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
