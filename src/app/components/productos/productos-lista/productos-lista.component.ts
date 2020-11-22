import { Component, OnInit } from '@angular/core';
// model
import { Productos } from '../modelos/productos';

// service
import { ProductosService } from '../servidores/productos.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

// Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
ProductosLista: Productos[];

constructor(
  private ProductosService: ProductosService,
  private toastr: ToastrService
) { }


/* 
  Cuando cargue la aplicación, que reciba toda la información con el método 'getProductoss' del servicio de firebase
   pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
   base de datos de firebase, para recorrerlo con forEach. 

   Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
   let x = element.payload.toJSON();

   Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
   por que se necesita para luego eliminar el registro
   x["$key"] = element.key;

   Cuando ya se tiene el elemento se asigna a mi arreglo 'ProductosList' para ser mostrado en mi pantalla list
   this.ProductosList.push(x as Productos);
*/
ngOnInit() {
  return this.ProductosService.getProductos()
    .snapshotChanges().subscribe(item => {
      this.ProductosLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["idP"] = element.key;
        this.ProductosLista.push(x as Productos);
      });
    });
}

/* 
 Recibe una varible de tipo 'Productos' para invocar el servicio de firebase, para actualizarlo
 Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, Productos)'  
*/
onEdit(Productos: Productos) {
  this.ProductosService.selectedProducto = Object.assign({}, Productos);
}

/* 
 Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteProductos' del servicio de firebase
 ademas muestra un 'warning' con toastr
*/
onDelete($key: string) {
  if (confirm('¿Estas seguro de borrar este elemento?')) {
    this.ProductosService.deleteProducto($key);
    this.toastr.warning('Borrado exitoso', 'Borrado exitoso');
  }
}
}
