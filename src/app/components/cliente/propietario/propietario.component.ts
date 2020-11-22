import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import {PropietarioService} from '../servidores/propietario.service';
// Class
import { Propietario } from '../modelos/propietario';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  constructor(
    public PropietarioService: PropietarioService,
    public toastr: ToastrService
  ) { }

// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los Propietarioos
  ngOnInit() {
    this.PropietarioService.getPropietarios();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  texto:string;
  onSubmit(PropietarioForm: NgForm) {
    if (PropietarioForm.value.idP == null)
    {
      this.PropietarioService.insertarPropietario(PropietarioForm.value);
      this.texto="Propietario Guardado";
    }
    else
    {
      this.PropietarioService.actulizarPropietario(PropietarioForm.value);
      this.texto="Propietario Actulizado";
    }
      

    this.resetForm(PropietarioForm);
    this.toastr.success('Operacion exitosa', this.texto+"");
  }

  // Para limpiar el formulario
  resetForm(propietarioForm?: NgForm) {
    if (propietarioForm != null)
      propietarioForm.reset();
    this.PropietarioService.selectedPropietario = new Propietario();
  }
}
