import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [PokemonHeaderComponent, PokemonSearchComponent],
  imports: [CommonModule],
  exports: [PokemonHeaderComponent, PokemonSearchComponent],
})
export class SharedModule {}
