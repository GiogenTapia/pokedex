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
  private endPagination: number = 5;
  private startPagintation: number =0;



  public imageUrl= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  public listPok!: Result [];
  public pokemonNum : number[] = [];
  public indexPage: number [] = [0,1,2,3,4,5];
  public flag: number = 0;

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
    this.flag = index;
    this.consulta(index);
    this.checkPagination(this.flag);

  }

  pagintation(index: number){
    if(this.flag + index < 0) return;
    this.checkPagination(this.flag);
    this.flag =  this.flag + index;
    this.consulta(this.flag);

  }

  consulta( index: number){

    this._pokemonService.getAllPokemon(index * 12).subscribe(
      (resp)=> {
        this.listPok = resp.results

        if(this.pokemonNum.length>0) this.pokemonNum.splice(0);

        this.listPok.forEach(pok => {
          this.pokemonNum.push( Number(pok.url.split('/')[6]) )
        });
        console.log(this.pokemonNum);}
    );
  }

  checkPagination(index : number){
switch (index) {

  case this.endPagination:
    this.indexPage.splice(0);
    this.startPagintation = this.endPagination;
    this.endPagination = this.startPagintation + 5;

    for (let i = this.startPagintation; i <= this.endPagination; i++) {
      this.indexPage.push(i);

    }
    break;

    case this.startPagintation:

    if(this.startPagintation===0) return;
      this.indexPage.splice(0);
      this.endPagination = this.startPagintation;
      this.startPagintation = this.endPagination - 5;

      for (let i = this.startPagintation; i <= this.endPagination; i++) {
        this.indexPage.push(i);

      }
    break;

  default:
    break;
}
  }

}
