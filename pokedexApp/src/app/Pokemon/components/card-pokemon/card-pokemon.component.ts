import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon/interfaces';
import { PokemonService } from 'src/app/Pokemon/service/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  private _pokemonService = inject(PokemonService);
  private _route = inject(Router);

  get listPokemon(): Pokemon[]{
    return this._pokemonService.getPokemonList()
  }

  ngOnInit(): void {

    this._pokemonService.getPokemonByIndex(12);

  }

  search(id: number){

    this._route.navigate(['pokemon/',id]);

  }

}
