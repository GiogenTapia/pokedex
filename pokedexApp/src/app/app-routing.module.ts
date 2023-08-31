import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './Pokemon/pages/pokedex/pokedex.component';
import { PokemonComponent } from './Pokemon/pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path:'pokedex',
    component: PokedexComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent
  },
  {
    path:'**',
    redirectTo: 'pokedex'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
