import { Component, OnInit } from '@angular/core';
import {VeterinariaService} from '../../services/veterinaria.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      asunto: new FormControl(''),
      mensaje: new FormControl('')
    });
  }

  contactForm: FormGroup;

  constructor(private dbdata: VeterinariaService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    this.dbdata.saveMessage(this.contactForm.value);
    this.onResetForm();
  }

}
