import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sport} from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  apiURL="http://127.0.0.1:8000/api/sports/";

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Sport[]>(this.apiURL);
  }
  
  findOne(id: number) {
    return this.http.get<Sport>(this.apiURL+id);
  }
}

