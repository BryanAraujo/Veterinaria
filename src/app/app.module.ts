import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// firebase 
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// service 
import { VeterinariaService } from './services/veterinaria.service';

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
    RazaListaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
          
  providers: [
    VeterinariaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
