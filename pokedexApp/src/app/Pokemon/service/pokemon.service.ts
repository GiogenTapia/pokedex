import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pokemon } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _http = inject(HttpClient);
  private _url = 'https://pokeapi.co/api/v2';

  private listPokemon : Pokemon [] = [];

  constructor() { }

  getPokemonList(){
    return this.listPokemon;
  }

  getPokemonById(id: string): Observable<Pokemon>{

   return this._http.get<Pokemon>(`${this._url}/pokemon/${id}`);

  }

  getPokemonByIndex(index: number){
    for (let i = 1; i <= index; i++) {
    this._http.get<Pokemon>(`${this._url}/pokemon/${i}`).subscribe(
      (pokemon)=> {this.listPokemon.push(pokemon)}
    );
    }
  }


}
