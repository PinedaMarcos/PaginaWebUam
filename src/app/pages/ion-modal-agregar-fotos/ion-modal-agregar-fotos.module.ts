import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonModalAgregarFotosPageRoutingModule } from './ion-modal-agregar-fotos-routing.module';

import { IonModalAgregarFotosPage } from './ion-modal-agregar-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonModalAgregarFotosPageRoutingModule
  ],
  declarations: [IonModalAgregarFotosPage]
})
export class IonModalAgregarFotosPageModule {}
