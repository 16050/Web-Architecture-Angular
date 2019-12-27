import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Category[]>("http://127.0.0.1:8000/api/categories/");
  }
}
