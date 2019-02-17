import { Component, OnInit } from '@angular/core';

import { RestaurantesService } from './restaurantes.service';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  constructor(private restaurantesService: RestaurantesService) { }

  restaurantes: Restaurante[];

  ngOnInit() {
    this.restaurantesService.restaurants().subscribe(restaurantes => this.restaurantes = restaurantes)
  }

}
