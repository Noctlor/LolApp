import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ChampService {
  baseUrl: string = environment.baseUrl;
   buscarc: string = environment.buscarc;
  constructor(private http:HttpClient) { }

  getheroes(){
    return this.http.get<Character>(`${ this.baseUrl }`)
    .pipe(map(resp=>{  return resp.data}));
  }

  getheroeid(id:string){
    return this.http.get<Character>(`${ this.buscarc }/${ id }.json`)
    .pipe(map(resp=>{  return resp.data}));
  }
  getSugerencias( termino: string ){
    return this.http.get<Character>(`${ this.buscarc }/${ termino}.json`)
    .pipe(map(resp=>{  return resp.data}));
  }
}
