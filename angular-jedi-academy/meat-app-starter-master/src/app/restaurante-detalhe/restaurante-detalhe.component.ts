import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';
import { RestaurantesService } from './../restaurantes/restaurantes.service';


@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private restaurantesService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantesService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurante = restaurant);
  }

}
