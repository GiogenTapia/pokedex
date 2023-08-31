import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../interfaces';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  private _route = inject(ActivatedRoute);
  private _idPokemon = '';
  private _pokemonService = inject(PokemonService);

  public pokemon !: Pokemon;

  constructor(){
    this._idPokemon = this._route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {

    this._pokemonService.getPokemonById(this._idPokemon).subscribe(
      (pokemon)=> this.pokemon = pokemon
    )
  }

}
