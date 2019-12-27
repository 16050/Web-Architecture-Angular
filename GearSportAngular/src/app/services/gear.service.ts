import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Gear} from '../models/gear';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Gear[]>("http://127.0.0.1:8000/api/");
  }
}
