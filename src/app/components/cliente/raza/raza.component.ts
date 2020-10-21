import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { RazaService } from '../servidores/raza.service';
// Class
import { Raza } from '../modelos/raza';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css']
})
export class RazaComponent implements OnInit {
  constructor(
    public RazaService: RazaService,
    public toastr: ToastrService
  ) { }

// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los Razaos
  ngOnInit() {
    this.RazaService.getRazas();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(RazaForm: NgForm) {
    if (RazaForm.value.idR == null)
      this.RazaService.insertarRaza(RazaForm.value);
    else
    {
      this.RazaService.actulizarRaza(RazaForm.value);
    }
      

    this.resetForm(RazaForm);
    this.toastr.success('Operacion exitosa', 'Raza Registrada');
  }

  // Para limpiar el formulario
  resetForm(RazaForm?: NgForm) {
    if (RazaForm != null)
      RazaForm.reset();
    this.RazaService.selectedRaza = new Raza();
  }

}
