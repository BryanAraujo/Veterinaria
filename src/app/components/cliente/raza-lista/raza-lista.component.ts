import { Component, OnInit } from '@angular/core';
// model
import { Raza } from '../modelos/raza';

// service
import { RazaService } from '../servidores/raza.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-raza-lista',
  templateUrl: './raza-lista.component.html',
  styleUrls: ['./raza-lista.component.css']
})
export class RazaListaComponent implements OnInit {

  
  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  RazaLista: Raza[];

  constructor(
    private RazaService: RazaService,
    private toastr: ToastrService
  ) { }


  /* 
    Cuando cargue la aplicación, que reciba toda la información con el método 'getRazas' del servicio de firebase
     pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
     base de datos de firebase, para recorrerlo con forEach. 
  
     Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
     let x = element.payload.toJSON();
  
     Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
     por que se necesita para luego eliminar el registro
     x["$key"] = element.key;
  
     Cuando ya se tiene el elemento se asigna a mi arreglo 'RazaList' para ser mostrado en mi pantalla list
     this.RazaList.push(x as Raza);
  */
  ngOnInit() {
    return this.RazaService.getRazas()
      .snapshotChanges().subscribe(item => {
        this.RazaLista = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["idR"] = element.key;
          this.RazaLista.push(x as Raza);
        });
      });
  }

  /* 
   Recibe una varible de tipo 'Raza' para invocar el servicio de firebase, para actualizarlo
   Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, Raza)'  
  */
  onEdit(Raza: Raza) {
    this.RazaService.selectedRaza = Object.assign({}, Raza);
  }

  /* 
   Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteRaza' del servicio de firebase
   ademas muestra un 'warning' con toastr
*/
  onDelete($key: string) {
    if (confirm('¿Estas seguro de borrar este elemento?')) {
      this.RazaService.deleteRaza($key);
      this.toastr.warning('Borrado exitoso', 'Borrado exitoso');
    }
  }
}
