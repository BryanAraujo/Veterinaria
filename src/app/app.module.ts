import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

// firebase 
import { environment } from '../environments/environment'; 
import { AngularFireModule } from '@angular/fire'; 
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
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinariaComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ClienteComponent,
    VeterinarioComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [
    VeterinariaService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
