import { Component, OnInit } from '@angular/core';
// model
import { Citas } from '../modelo/citas';

// service
import { CitasService } from '../servicio/citas.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-citas-listas',
  templateUrl: './citas-listas.component.html',
  styleUrls: ['./citas-listas.component.css']
})
export class CitasListasComponent implements OnInit {

  
// Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
CitasLista: Citas[];

constructor(
  private CitasService: CitasService,
  private toastr: ToastrService
) { }


/* 
  Cuando cargue la aplicación, que reciba toda la información con el método 'getCitasss' del servicio de firebase
   pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
   base de datos de firebase, para recorrerlo con forEach. 

   Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
   let x = element.payload.toJSON();

   Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
   por que se necesita para luego eliminar el registro
   x["$key"] = element.key;

   Cuando ya se tiene el elemento se asigna a mi arreglo 'CitassList' para ser mostrado en mi pantalla list
   this.CitassList.push(x as Citass);
*/
ngOnInit() {
  return this.CitasService.getCitas()
    .snapshotChanges().subscribe(item => {
      this.CitasLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["idCi"] = element.key;
        this.CitasLista.push(x as Citas);
      });
    });
}

/* 
 Recibe una varible de tipo 'Citass' para invocar el servicio de firebase, para actualizarlo
 Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, Citass)'  
*/
onEdit(Citas: Citas) {
  this.CitasService.selectedCitas = Object.assign({}, Citas);
}

/* 
 Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteCitass' del servicio de firebase
 ademas muestra un 'warning' con toastr
*/
onDelete($key: string) {
  if (confirm('¿Estas seguro de borrar este elemento?')) {
    this.CitasService.deleteCitas($key);
    this.toastr.warning('Borrado exitoso', 'Borrado exitoso');
  }
}

}
