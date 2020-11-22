import { Component, OnInit } from '@angular/core';
// model
import { Cliente } from '../modelos/cliente';

// service
import { ClienteService } from '../servidores/cliente.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

 // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
 ClienteLista: Cliente[];
 buscar:string;
 constructor(
   private ClienteService: ClienteService,
   private toastr: ToastrService
 ) { }


 /* 
   Cuando cargue la aplicación, que reciba toda la información con el método 'getClientes' del servicio de firebase
    pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
    base de datos de firebase, para recorrerlo con forEach. 
 
    Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
    let x = element.payload.toJSON();
 
    Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
    por que se necesita para luego eliminar el registro
    x["$key"] = element.key;
 
    Cuando ya se tiene el elemento se asigna a mi arreglo 'ClienteList' para ser mostrado en mi pantalla list
    this.ClienteList.push(x as Cliente);
 */
consulClie(){
    

  this.ClienteService.getClientes()
    .snapshotChanges().subscribe(item => {
      this.ClienteLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ClienteLista.push(x as Cliente);
      });

      this.ClienteLista = this.ClienteLista.filter(data => {
        return data.prop.toString().trim() === this.buscar;
      })

      if(this.ClienteLista.length === 0){
        this.toastr.warning('Registro no encontrado', 'Advertencia');
        this.mostrarRegistro();
      }
    });
}
 ngOnInit() {
  this.mostrarRegistro();
 }
 mostrarRegistro()
 {
  return this.ClienteService.getClientes()
  .snapshotChanges().subscribe(item => {
    this.ClienteLista = [];
    item.forEach(element => {
      let x = element.payload.toJSON();
      x["idC"] = element.key;
      this.ClienteLista.push(x as Cliente);
    });
  });
 }

 /* 
  Recibe una varible de tipo 'Cliente' para invocar el servicio de firebase, para actualizarlo
  Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, Cliente)'  
 */
 onEdit(Cliente: Cliente) {
   this.ClienteService.selectedCliente = Object.assign({}, Cliente);
 }

 /* 
  Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteCliente' del servicio de firebase
  ademas muestra un 'warning' con toastr
*/
 onDelete($key: string) {
   if (confirm('¿Estas seguro de borrar este elemento?')) {
     this.ClienteService.deleteCliente($key);
     this.toastr.warning('Borrado exitoso', 'Borrado exitoso');
   }
 }
}
