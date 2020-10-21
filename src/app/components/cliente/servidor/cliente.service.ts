import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/cliente';


// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Traer los datos de firebase
  clienteLista: AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo Cliente
  selectedCliente: Cliente = new Cliente();

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los Clientes desde firebase 
  getClientes() { // guarda los elementos en la varible 'Clientes'
    return this.clienteLista = this.firebase.list('Clientes');
  }

  // crear un nuevo Cliente  , recibiendo un parametro de tipo Cliente
  insertarCliente(Cliente: Cliente) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo Cliente , puede acceder a sus propiedades
    this.clienteLista.push({
      nombre: Cliente.nombre,
      apellido: Cliente.apellido,
      raza: Cliente.raza,
      edad:Cliente.edad,
      propietario:Cliente.prop
    }).ref.child("Clientes");
  }

  // Actualiza un Cliente, recibiendo un parametro de tipo Cliente
  actulizarCliente(Cliente: Cliente) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.clienteLista.update(Cliente.idC, {
      nombre: Cliente.nombre,
      apellido: Cliente.apellido,
      raza: Cliente.raza,
      edad:Cliente.apellido,
      propietario:Cliente.prop
    });
  }

  // Elimina un Clienteo, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteCliente($key: string) {
    this.clienteLista.remove($key);
  }

}
