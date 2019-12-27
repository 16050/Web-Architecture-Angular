import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sport} from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Sport[]>("http://127.0.0.1:8000/api/sports/");
  }
}

