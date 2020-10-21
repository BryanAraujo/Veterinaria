import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { NgForm } from '@angular/forms';

//  Service 
import {  ClienteService } from '../servidores/cliente.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  clienteLista2: Cliente[];
  constructor(
    public clienteServicio: ClienteService,
    public toastr: ToastrService
  ) { }

// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.clienteServicio.getClientes()
      .snapshotChanges().subscribe(item => {
        this.clienteLista2 = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.clienteLista2.push(x as Cliente);
        });
      });
    this.reinicioForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(clienteForm: NgForm) {
    if (clienteForm.value.$key == null)
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
