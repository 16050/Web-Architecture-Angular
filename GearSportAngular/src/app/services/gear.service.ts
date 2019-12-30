import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Gear} from '../models/gear';

@Injectable({
  providedIn: 'root'
})
export class GearService {
  apiURL="http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Gear[]>(this.apiURL);
  }

  delete(id: number){
    return this.http.delete(this.apiURL + 'delete/gear/' + id);
  }

  addGear(gear: any){
    return this.http.post(this.apiURL + 'new', gear);
  }

  // Edit a game in database
  editGear(gear: any, id: number){
    return this.http.put(this.apiURL + id + '/edit', gear);
  }

  findOne(id: number) {
    return this.http.get<Gear>(this.apiURL+id);
  }
}
