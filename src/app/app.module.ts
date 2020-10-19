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

@NgModule({
  declarations: [
    AppComponent,
    VeterinariaComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ClienteComponent,
    VeterinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot()
  ],
  providers: [
    VeterinariaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
