import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Modelos
import { Citas} from '../modelo/citas';
import { Cliente } from '../../cliente/modelos/cliente';
//  Service 
import {  ClienteService } from '../../cliente/servidores/cliente.service';
import {  CitasService } from '../servicio/citas.service';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  clienteLista: Cliente[];
  constructor(
    public clienteServicio: ClienteService,
    public CitasServicio: CitasService,
    public toastr: ToastrService
  ) { }

  cargarComboxCliente()
  {
    this.clienteServicio.getClientes()
    .snapshotChanges().subscribe(item => {
      this.clienteLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["idC"] = element.key;
        this.clienteLista.push(x as Cliente);
      });
    });
  }


  
// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.clienteServicio.getClientes();
    this.reinicioForm();
    this.cargarComboxCliente();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  texto:String;
  onSubmit(CitasForm: NgForm) {
    if (CitasForm.value.idCi == null)
    {  
    this.CitasServicio.insertarCitas(CitasForm.value);
    this.texto="Citas Guardado";  
    }
    else
    {
      this.CitasServicio.actulizarCitas(CitasForm.value);
      this.texto="Citas Actulizado";  
    }
    this.reinicioForm(CitasForm);
    this.toastr.success('Operación Exitosa', this.texto+"");
  }

  // Para limpiar el formulario
  reinicioForm(CitasForm?: NgForm) {
    if (CitasForm != null)
      CitasForm.reset();
    this.CitasServicio.selectedCitas = new Citas();
  }

}
