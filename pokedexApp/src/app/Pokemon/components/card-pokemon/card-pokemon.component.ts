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
  public listPok!: Result [];
  public pokemonNum : number[] = [];
  public indexPage: number [] = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit(): void {
    this._pokemonService.getAllPokemon(0).subscribe(
      (resp)=> {this.listPok = resp.results;

        this.listPok.forEach(pok => {
          this.pokemonNum.push( Number(pok.url.split('/')[6]) )
        });
        console.log(this.pokemonNum);


      }
    );

  }

  search(id: number){

    this._route.navigate(['pokemon/',id]);

  }

  navigate(index: number){

    this._pokemonService.getAllPokemon(index * 10).subscribe(
      (resp)=> {
        this.listPok = resp.results

        if(this.pokemonNum.length>0) this.pokemonNum.splice(0);

        this.listPok.forEach(pok => {
          this.pokemonNum.push( Number(pok.url.split('/')[6]) )
        });
        console.log(this.pokemonNum);}
    );

  }

}
