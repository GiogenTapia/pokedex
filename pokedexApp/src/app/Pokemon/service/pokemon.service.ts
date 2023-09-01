import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pokemon } from '../interfaces';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemonResponse.interface';


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



  getAllPokemon(index: number):Observable<PokemonResponse>{

    return this._http.get<PokemonResponse>(`${this._url}/pokemon?limit=${index}`);
  }


}
