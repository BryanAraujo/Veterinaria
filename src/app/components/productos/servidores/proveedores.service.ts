import { Injectable } from '@angular/core';
import { Proveedores } from '../modelos/proveedores';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

 
  proveedorLista: AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo proveedor
  selectedProveedor: Proveedores = new Proveedores();

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los proveedors desde firebase 
  getProveedores() { // guarda los elementos en la varible 'proveedors'
    return this.proveedorLista = this.firebase.list('Proveedores');
  }

  // crear un nuevo proveedor  , recibiendo un parametro de tipo proveedor
  insertarProveedor(proveedor: Proveedores) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo proveedor , puede acceder a sus propiedades

    this.proveedorLista.push({
      nombre: proveedor.nombre
    }).ref.child("Proveedores");
  }

  // Actualiza un proveedor, recibiendo un parametro de tipo proveedor
  actulizarProveedor(proveedor: Proveedores) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.proveedorLista.update(proveedor.idPr, {
      nombre: proveedor.nombre
    });
  }

  // Elimina un proveedoro, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProveedor($key: string) {
    this.proveedorLista.remove($key);
  }
}
