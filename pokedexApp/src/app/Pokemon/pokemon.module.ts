import { NgApexchartsModule } from 'ng-apexcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { BarStadistictsComponent } from './components/bar-stadisticts/bar-stadisticts.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokemonComponent,
    CardPokemonComponent,
    BarStadistictsComponent,
    SpinnerComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule

  ],
  exports:[
    PokedexComponent,
    PokemonComponent,
  ]
})
export class PokemonModule { }
