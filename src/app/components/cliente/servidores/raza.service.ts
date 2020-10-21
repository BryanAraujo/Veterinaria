import { Injectable } from '@angular/core';
import { Raza } from '../modelos/raza';
// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class RazaService {

 // Traer los datos de firebase
 RazaLista: AngularFireList<any>;

 // Una variable temporal, para guardar los datos seleccionados, del tipo Raza
 selectedRaza: Raza = new Raza();

 constructor(private firebase: AngularFireDatabase) { }

 // Traer todos los Razas desde firebase 
 getRazas() { // guarda los elementos en la varible 'Razas'
   return this.RazaLista = this.firebase.list('Razas');
 }

 // crear un nuevo Raza  , recibiendo un parametro de tipo Raza
 insertarRaza(Raza: Raza) {
   // agregar un dato al final de la lista, como recibe un objeto del tipo Raza , puede acceder a sus propiedades
   this.RazaLista.push({
     nombre: Raza.nombre,
   }).ref.child("Razas");
 }

 // Actualiza un Raza, recibiendo un parametro de tipo Raza
 actulizarRaza(Raza: Raza) {
   // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
   this.RazaLista.update(Raza.idR, {
     nombre: Raza.nombre,
   });
 }

 // Elimina un Razao, recibiendo como parametro la clave , utilizando el metodo remove de firebase
 deleteRaza($key: string) {
   this.RazaLista.remove($key);
 }
}
