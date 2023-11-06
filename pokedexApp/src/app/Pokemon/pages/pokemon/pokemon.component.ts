import { Component, Input, OnInit, inject, ElementRef, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon, PokemonSpecies } from '../../interfaces';
import { debounceTime, switchMap } from 'rxjs';


@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  private _route = inject(ActivatedRoute);
  private _pokemonService = inject(PokemonService);

  public pokemon !: Pokemon;
  public ruteImage = '../../../../assets/Types/';
  public pokemonInfo !: PokemonSpecies;
  public load: boolean = false;
  public description : string = '';
  public listType: string [] = [];
  public listAbility: string [] = [];
  public listStats: number[]= [];
  public title = 'Estadisticas';




  constructor(){

  }




  ngOnInit(): void {
    window.scrollTo(0, 0);




    this._route.params.pipe(
      debounceTime(500),
      switchMap(({id})=> this._pokemonService.getPokemonById(id))
      ).subscribe(
        (pokemon)=>{
          this.pokemon = pokemon;
          this._pokemonService.getSpeciesById(pokemon.id).subscribe(
            resp => {
            this.pokemonInfo = resp;
            this.load = true;

            //Get description
            this.pokemonInfo.flavor_text_entries.forEach(flavor => {
              if (flavor.language.name === 'es') {
                this.description = flavor.flavor_text
              }
            });

            this.pokemon.types.forEach(typePokemon => {
              this.listType.push(typePokemon.type.name)
            });

            this.pokemon.abilities.forEach(ability => {
              this.listAbility.push(ability.ability.name)

            });

            this.pokemon.stats.forEach(stat => {

              this.listStats.push(stat.base_stat);

            });

          }
          )
        }
      );




  }

}
