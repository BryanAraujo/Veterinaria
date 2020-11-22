import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Modelos
import { Productos } from '../modelos/productos';
import { Proveedores } from '../modelos/proveedores';
//  Service 
import {  ProductosService} from '../servidores/productos.service';
import {  ProveedoresService } from '../servidores/proveedores.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  proveedorLista: Proveedores[];
  constructor(
    public productoServicio: ProductosService,
    public proveedorServicio: ProveedoresService,
    public toastr: ToastrService
  ) { }


  cargarComboxProve()
  {
    this.proveedorServicio.getProveedores()
    .snapshotChanges().subscribe(item => {
      this.proveedorLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["idP"] = element.key;
        this.proveedorLista.push(x as Proveedores);
      });
    });
  }
  
// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.productoServicio.getProductos();
    this.reinicioForm();
    this.cargarComboxProve();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  texto:String;
  onSubmit(ProductoForm: NgForm) {
  
    if (ProductoForm.value.idP == null)
    {
      this.productoServicio.insertarProducto(ProductoForm.value);
      this.texto="Producto Guardado";
    }
    else
    {
      this.productoServicio.actulizarProducto(ProductoForm.value);
      this.texto="Producto Actulizado";
    }
    this.reinicioForm(ProductoForm);
    this.toastr.success('Operación Exitosa', this.texto+"");
  }

  // Para limpiar el formulario
  reinicioForm(ProductoForm?: NgForm) {
    if (ProductoForm != null)
      ProductoForm.reset();
    this.productoServicio.selectedProducto = new Productos();
  }


}
