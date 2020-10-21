import { Injectable } from '@angular/core';
import { Propietario } from '../modelos/propietario';
// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  // Traer los datos de firebase
  PropietarioLista: AngularFireList<any>;
 
  // Una variable temporal, para guardar los datos seleccionados, del tipo Propietario
  selectedPropietario: Propietario = new Propietario();
 
  constructor(private firebase: AngularFireDatabase) { }
 
  // Traer todos los Propietarios desde firebase 
  getPropietarios() { // guarda los elementos en la varible 'Propietarios'
    return this.PropietarioLista = this.firebase.list('Propietarios');
  }
 
  // crear un nuevo Propietario  , recibiendo un parametro de tipo Propietario
  insertarPropietario(Propietario: Propietario) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo Propietario , puede acceder a sus propiedades
    this.PropietarioLista.push({
      nombre: Propietario.nombre,
      apellido:Propietario.apellido,
      dui:Propietario.dui,
      tel:Propietario.tel,
      correo: Propietario.correo
    }).ref.child("Propietarios")
  }
 
  // Actualiza un Propietario, recibiendo un parametro de tipo Propietario
  actulizarPropietario(Propietario: Propietario) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.PropietarioLista.update(Propietario.idP, {
      nombre: Propietario.nombre,
      apellido:Propietario.apellido,
      dui:Propietario.dui,
      tel:Propietario.tel,
      correo: Propietario.correo
    });
  }
 
  // Elimina un Propietarioo, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deletePropietario($key: string) {
    this.PropietarioLista.remove($key);
  }
}
