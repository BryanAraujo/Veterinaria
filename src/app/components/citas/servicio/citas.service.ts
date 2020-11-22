import { Injectable } from '@angular/core';
import { Citas } from '../modelo/citas';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CitasService {

// Traer los datos de firebase
CitasLista: AngularFireList<any>;

// Una variable temporal, para guardar los datos seleccionados, del tipo Citas
selectedCitas: Citas = new Citas();

constructor(private firebase: AngularFireDatabase) { }

// Traer todos los Citass desde firebase 
getCitas() { // guarda los elementos en la varible 'Citass'
  return this.CitasLista = this.firebase.list('Citas');
}

// crear un nuevo Citas  , recibiendo un parametro de tipo Citas
insertarCitas(Citas: Citas) {
  // agregar un dato al final de la lista, como recibe un objeto del tipo Citas , puede acceder a sus propiedades

  this.CitasLista.push({
    paciente: Citas.paciente,
    fechaCita:Citas.fechaCita,
    hora:Citas.hora,
    valor:Citas.valor
  }).ref.child("Citas");
}

// Actualiza un Citas, recibiendo un parametro de tipo Citas
actulizarCitas(Citas: Citas) {
  // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
  this.CitasLista.update(Citas.idCi, {
    paciente: Citas.paciente,
    fechaCita:Citas.fechaCita,
    hora:Citas.hora,
    valor:Citas.valor
  });
}

// Elimina un Citaso, recibiendo como parametro la clave , utilizando el metodo remove de firebase
deleteCitas($key: string) {
  this.CitasLista.remove($key);
}
}
