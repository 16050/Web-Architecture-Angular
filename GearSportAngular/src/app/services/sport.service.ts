import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sport} from '../models/sport';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  apiURL="http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Sport[]>(this.apiURL +'sports/');
  }

  findOne(id) {
    return this.http.get<Sport>(this.apiURL +'sports/'+id);
  }

  addSport(sport: any){
    return this.http.post(this.apiURL + 'new_sport', sport);
  }
}

