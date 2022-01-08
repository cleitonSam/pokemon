import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, PokemonListRoutingModule, SharedModule],
  exports: [PokemonListComponent],
})
export class PokemonListModule {}
