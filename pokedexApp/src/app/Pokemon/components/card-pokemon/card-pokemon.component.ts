import { Result } from './../../interfaces/pokemonResponse.interface';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonResponse } from 'src/app/Pokemon/interfaces';
import { PokemonService } from 'src/app/Pokemon/service/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  private _pokemonService = inject(PokemonService);
  private _route = inject(Router);

  public imageUrl= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  public listPok!: PokemonResponse;


  ngOnInit(): void {
    this._pokemonService.getAllPokemon(12).subscribe(
      (resp)=> this.listPok = resp
    );

  }

  search(id: number){

    this._route.navigate(['pokemon/',id]);

  }

}
