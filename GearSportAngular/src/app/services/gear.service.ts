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

  findOne(id: number) {
    return this.http.get<Gear>(this.apiURL+id);
  }
}
