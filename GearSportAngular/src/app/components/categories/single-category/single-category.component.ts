import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import { Category } from '../../../models/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  single_category: Category[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    this.getSingleSport();
  }

  getSingleSport()
  {
    const id = this.route.snapshot.params['id'];
    this.categoryService.findOne(id).subscribe(single_category => this.single_category = single_category);
  }
}
