import { Component, OnInit, Input } from '@angular/core';
import { Restaurante } from './restaurante.model'
@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante: Restaurante;
  
  constructor() { }

  ngOnInit() {
  }

}
