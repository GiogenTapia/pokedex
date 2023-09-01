import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon, PokemonSpecies } from '../../interfaces';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  private _route = inject(ActivatedRoute);
  private _pokemonService = inject(PokemonService);

  public pokemon !: Pokemon;
  public pokemonInfo !: PokemonSpecies;
  public load: boolean = false;


  constructor(){
  }



  ngOnInit(): void {


    this._route.params.pipe(
      debounceTime(500),
      switchMap(({id})=> this._pokemonService.getPokemonById(id))
      ).subscribe(
        (pokemon)=>{
          this.pokemon = pokemon;
          this._pokemonService.getSpeciesById(pokemon.id).subscribe(
            resp => {this.pokemonInfo = resp;
            this.load = true}
          )
        }
      );

  }

}
