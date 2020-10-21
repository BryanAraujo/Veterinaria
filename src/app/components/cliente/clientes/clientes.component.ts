import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Modelos
import { Cliente } from '../modelos/cliente';
import { Raza } from '../modelos/raza';
import { Propietario } from '../modelos/propietario';
//  Service 
import {  ClienteService } from '../servidores/cliente.service';
import {  RazaService } from '../servidores/raza.service';
import {  PropietarioService } from '../servidores/propietario.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  razaLista: Raza[];
  propiLista: Propietario[];
  constructor(
    public clienteServicio: ClienteService,
    public RazaServicio: RazaService,
    public PropietarioServicio: PropietarioService,
    public toastr: ToastrService
  ) { }

  cargarComboxRaza()
  {
    this.RazaServicio.getRazas()
    .snapshotChanges().subscribe(item => {
      this.razaLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["idR"] = element.key;
        this.razaLista.push(x as Raza);
      });
    });
  }
  cargarComboxPropi()
  {
    this.PropietarioServicio.getPropietarios()
    .snapshotChanges().subscribe(item => {
      this.propiLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["idP"] = element.key;
        this.propiLista.push(x as Propietario);
      });
    });
  }
  
// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.clienteServicio.getClientes();
    this.reinicioForm();
    this.cargarComboxPropi();
    this.cargarComboxRaza();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(clienteForm: NgForm) {
    if (clienteForm.value.idC == null)
      this.clienteServicio.insertarCliente(clienteForm.value);
    else
      this.clienteServicio.actulizarCliente(clienteForm.value);

    this.reinicioForm(clienteForm);
    this.toastr.success('Operación Exitosa', 'Cliente registrado o actulizado');
  }

  // Para limpiar el formulario
  reinicioForm(clienteForm?: NgForm) {
    if (clienteForm != null)
      clienteForm.reset();
    this.clienteServicio.selectedCliente = new Cliente();
  }


}
