import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ion-modal-agregar-fotos',
  templateUrl: './ion-modal-agregar-fotos.page.html',
  styleUrls: ['./ion-modal-agregar-fotos.page.scss'],
})
export class IonModalAgregarFotosPage implements OnInit {

  public agregar: FormGroup;

  constructor(private FormBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.agregar = this.FormBuilder.group({
      nombreCientifico: ['', [Validators.required]],
      nombreColoquial: ['', [Validators.required]],
      Autor: ['', [Validators.required]],
      Imagen: ['',[Validators.required]],
    });
  }

  send():any{
    console.log(this.send)
  }
}
