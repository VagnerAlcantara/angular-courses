import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { Routes } from "@angular/router/src/config";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantesComponent } from "app/restaurantes/restaurantes.component";
import { RestauranteDetalheComponent } from "app/restaurante-detalhe/restaurante-detalhe.component";
import { ReviewsComponent } from 'app/restaurante-detalhe/reviews/reviews.component';
import { OrderComponent } from 'app/order/order.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    {
        path: 'restaurantes/:id', component: RestauranteDetalheComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderComponent },

]