import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

// firebase 

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';


// service 
import { VeterinariaService } from './services/veterinaria.service';
import {AuthService} from './services/auth.service';

// Toastr, para notificaciones en angular 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeterinariaComponent } from './components/veterinaria/veterinaria.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';

import { ClienteListaComponent } from './components/cliente/cliente-lista/cliente-lista.component';
import { RazaComponent } from './components/cliente/raza/raza.component';
import { PropietarioComponent } from './components/cliente/propietario/propietario.component';
import { PropietarioListaComponent } from './components/cliente/propietario-lista/propietario-lista.component';
import { RazaListaComponent } from './components/cliente/raza-lista/raza-lista.component';
import { ClientesComponent } from './components/cliente/clientes/clientes.component';

import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosListaComponent } from './components/productos/productos-lista/productos-lista.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { ProveedoresComponent } from './components/productos/proveedores/proveedores.component';
import { ProveedoresListaComponent } from './components/productos/proveedores-lista/proveedores-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    VeterinariaComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ClienteComponent,
    VeterinarioComponent,
    ClienteListaComponent,
    RazaComponent,
    PropietarioComponent,
    PropietarioListaComponent,
    RazaListaComponent,
    ClientesComponent,
    VerifyEmailComponent,
    ProductosComponent,
    ProductosListaComponent,
    ProductoComponent,
    ProveedoresComponent,
    ProveedoresListaComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FontAwesomeModule
  ],
          
  providers: [
    VeterinariaService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
