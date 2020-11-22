import { Injectable } from '@angular/core';
import { Productos } from '../modelos/productos';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoLista: AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo producto
  selectedProducto: Productos = new Productos();

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los productos desde firebase 
  getProductos() { // guarda los elementos en la varible 'productos'
    return this.productoLista = this.firebase.list('Productos');
  }

  // crear un nuevo producto  , recibiendo un parametro de tipo producto
  insertarProducto(producto: Productos) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo producto , puede acceder a sus propiedades
    this.productoLista.push({
      nombre: producto.nombre,
      proveedor: producto.proveedor,
      precio: producto.precio,
      cantidad: producto.cantidad,
      fechaVenci:producto.fechaVenci
    }).ref.child("Productos");
  }

  // Actualiza un producto, recibiendo un parametro de tipo producto
  actulizarProducto(producto: Productos) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.productoLista.update(producto.idP, {
      nombre: producto.nombre,
      proveedor: producto.proveedor,
      precio: producto.precio, 
       cantidad: producto.cantidad,
      fechaVenci:producto.fechaVenci
    });
  }

  // Elimina un productoo, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProducto($key: string) {
    this.productoLista.remove($key);
  }
}
