import { PokemonListModule } from './../pokemon-list/pokemon-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomePokemonRoutingModule } from './home-pokemon-routing.module';
import { PokemonAnimationComponent } from '../pokemon-animation/pokemon-animation.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [HomeComponent, PokemonAnimationComponent],
  imports: [
    CommonModule,
    HomePokemonRoutingModule,
    PokemonListModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class HomeModule {}
