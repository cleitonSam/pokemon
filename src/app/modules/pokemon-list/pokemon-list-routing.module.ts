import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: PokemonDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonListRoutingModule {}
