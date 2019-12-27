import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories()
  {
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }
}
