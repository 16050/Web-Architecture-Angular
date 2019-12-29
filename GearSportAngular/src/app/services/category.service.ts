import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';
import {Sport} from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL="http://127.0.0.1:8000/api/categories/";

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Category[]>(this.apiURL);
  }

  findOne(id) {
    return this.http.get<Category>(this.apiURL+id);
  }
}
