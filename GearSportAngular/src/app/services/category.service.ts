import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';
import {Sport} from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL="http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Category[]>(this.apiURL +'categories/');
  }

  findOne(id) {
    return this.http.get<Category>(this.apiURL +'categories/'+id);
  }

  addCategory(category: any){
    return this.http.post(this.apiURL + 'new_category', category);
  }
}
