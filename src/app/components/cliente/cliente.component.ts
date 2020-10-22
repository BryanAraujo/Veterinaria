import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Modelos
import { Cliente } from 'src/app/components/cliente/modelos/cliente';
import { Raza } from 'src/app/components/cliente/modelos/raza';
import { Propietario } from 'src/app/components/cliente/modelos/propietario';
//  Service 
import {  ClienteService } from 'src/app/components/cliente/servidores/cliente.service';
import {  RazaService } from 'src/app/components/cliente/servidores/raza.service';
import {  PropietarioService } from 'src/app/components/cliente/servidores/propietario.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
 
  ) { }

 
  ngOnInit() {
   
  }


}
