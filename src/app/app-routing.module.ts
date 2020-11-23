import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from '../app/components/login/login.component';
import {RegisterComponent} from '../app/components/register/register.component';
import {ForgotPasswordComponent} from '../app/components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from '../app/components/verify-email/verify-email.component';
import {AuthService} from '../app/services/auth.service';
import{PrincipalComponent}from'../app/components/principal/principal.component';
import {ClientesComponent} from '../app/components/cliente/clientes/clientes.component';
import {ProductoComponent}from'../app/components/productos/producto/producto.component';
import {PropietarioComponent}from'../app/components/cliente/propietario/propietario.component';
import {CitaComponent} from '../app/components/citas/cita/cita.component';
import {RazaComponent}from '../app/components/cliente/raza/raza.component';
import{ProveedoresComponent}from '../app/components/productos/proveedores/proveedores.component';
import {VeterinarioComponent} from '../app/components/veterinario/veterinario.component';
import {AuthGuard} from '../app/shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'Pri', component:PrincipalComponent,children:[
  { path: 'Clientes', component: ClientesComponent },
  { path: 'Productos', component: ProductoComponent },
  { path: 'Proveedores', component: ProveedoresComponent },
  { path: 'Propietario', component: PropietarioComponent},
  { path: 'Citas', component:CitaComponent},
  { path: 'Raza', component:RazaComponent}]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'veterinario', component: VeterinarioComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
