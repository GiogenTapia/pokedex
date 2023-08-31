import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokemonComponent,
    CardPokemonComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokedexComponent,
    PokemonComponent
  ]
})
export class PokemonModule { }
