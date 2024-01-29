import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flora',
  templateUrl: './flora.page.html',
  styleUrls: ['./flora.page.scss'],
})
export class FloraPage implements OnInit {
  textBuscar: string;
  constructor() { }

  ngOnInit() {
  }
  buscar(event){
    this.textBuscar = event.detail.value;
      }
}
