import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pokemon, PokemonSpecies } from '../interfaces';
import { Observable, tap } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemonResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _http = inject(HttpClient);
  private _url = 'https://pokeapi.co/api/v2';


  private pokemon !: Pokemon;


  constructor() { }


  getPokemonById(id: string): Observable<Pokemon>{

    return this._http.get<Pokemon>(`${this._url}/pokemon/${id}`);
  }



  getAllPokemon(index: number):Observable<PokemonResponse>{

    return this._http.get<PokemonResponse>(`${this._url}/pokemon?limit=10&offset=${index}`);
  }

  getSpeciesById(id: number): Observable<PokemonSpecies> {
    return this._http.get<PokemonSpecies>(`${this._url}/pokemon-species/${id}`);

  }


}
