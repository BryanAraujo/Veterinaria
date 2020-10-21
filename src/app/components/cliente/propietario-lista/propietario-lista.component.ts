import { Component, OnInit } from '@angular/core';
// model
import { Propietario } from '../modelos/propietario';

// service
import { PropietarioService } from '../servidores/propietario.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-propietario-lista',
  templateUrl: './propietario-lista.component.html',
  styleUrls: ['./propietario-lista.component.css']
})
export class PropietarioListaComponent implements OnInit {

 // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
 PropietarioLista: Propietario[];

 constructor(
   private PropietarioService: PropietarioService,
   private toastr: ToastrService
 ) { }


 /* 
   Cuando cargue la aplicación, que reciba toda la información con el método 'getPropietarios' del servicio de firebase
    pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
    base de datos de firebase, para recorrerlo con forEach. 
 
    Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
    let x = element.payload.toJSON();
 
    Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
    por que se necesita para luego eliminar el registro
    x["$key"] = element.key;
 
    Cuando ya se tiene el elemento se asigna a mi arreglo 'PropietarioList' para ser mostrado en mi pantalla list
    this.PropietarioList.push(x as Propietario);
 */
 ngOnInit() {
   return this.PropietarioService.getPropietarios()
     .snapshotChanges().subscribe(item => {
       this.PropietarioLista = [];
       item.forEach(element => {
         let x = element.payload.toJSON();
         x["idP"] = element.key;
         this.PropietarioLista.push(x as Propietario);
       });
     });
 }

 /* 
  Recibe una varible de tipo 'Propietario' para invocar el servicio de firebase, para actualizarlo
  Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, Propietario)'  
 */
 onEdit(Propietario: Propietario) {
   this.PropietarioService.selectedPropietario = Object.assign({}, Propietario);
 }

 /* 
  Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deletePropietario' del servicio de firebase
  ademas muestra un 'warning' con toastr
*/
 onDelete($key: string) {
   if (confirm('¿Estas seguro de borrar este elemento?')) {
     this.PropietarioService.deletePropietario($key);
     this.toastr.warning('Borrado exitoso', 'Borrado exitoso');
   }
 }
}
