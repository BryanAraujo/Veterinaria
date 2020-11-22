import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Modelos
import { Proveedores } from '../modelos/proveedores';
import { Productos } from '../modelos/productos';
//  Service 
import {  ProductosService } from '../servidores/productos.service';
import {  ProveedoresService } from '../servidores/proveedores.service';

// toastr
import { ToastrService } from 'ngx-toastr';
import { stringify } from '@angular/compiler/src/util';
import { text } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

   proveLista: Proveedores[];
  constructor(
    public productosServicio: ProductosService,
    public ProveServicio: ProveedoresService,
    public toastr: ToastrService
  ) { }

  
// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.ProveServicio.getProveedores();
    this.reinicioForm();
  }
  texto:String;
  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(proveedorForm: NgForm) {
    
    if (proveedorForm.value.idPr == null)
   {   
     this.ProveServicio.insertarProveedor(proveedorForm.value);
      this.texto="Proveedor Guardado";
  }
    else
    {
      this.ProveServicio.actulizarProveedor(proveedorForm.value);
      this.texto="Proveedor Actulizado";
    }
    this.reinicioForm(proveedorForm);
    this.toastr.success('Operación Exitosa', this.texto+"");
  }

  // Para limpiar el formulario
  reinicioForm(proveedorForm?: NgForm) {
    if (proveedorForm != null)
    proveedorForm.reset();
    this.ProveServicio.selectedProveedor = new Proveedores();
  }

}
