import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Category } from '../../models/category';
import {SportService} from '../../services/sport.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router:Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories()
  {
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }

  showCategory(id:any) {
    this.router.navigate(['categories', +id]);
  }
}
