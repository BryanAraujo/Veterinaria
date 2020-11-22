import { Component, OnInit } from '@angular/core';
// model
import { Proveedores } from '../modelos/proveedores';

// service
import { ProveedoresService } from '../servidores/proveedores.service';

// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-proveedores-lista',
  templateUrl: './proveedores-lista.component.html',
  styleUrls: ['./proveedores-lista.component.css']
})
export class ProveedoresListaComponent implements OnInit {

  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  ProveLista: Proveedores[];

  constructor(
    private ProveService: ProveedoresService,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    return this.ProveService.getProveedores()
      .snapshotChanges().subscribe(item => {
        this.ProveLista = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["idPr"] = element.key;
          this.ProveLista.push(x as Proveedores);
        });
      });
  }

  /* 
   Recibe una varible de tipo 'Raza' para invocar el servicio de firebase, para actualizarlo
   Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, Raza)'  
  */
  onEdit(Prove: Proveedores) {
    this.ProveService.selectedProveedor = Object.assign({}, Prove);
  }

  /* 
   Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteRaza' del servicio de firebase
   ademas muestra un 'warning' con toastr
*/
  onDelete($key: string) {
    if (confirm('¿Estas seguro de borrar este elemento?')) {
      this.ProveService.deleteProveedor($key);
      this.toastr.warning('Borrado exitoso', 'Borrado exitoso');
    }
  }

}
