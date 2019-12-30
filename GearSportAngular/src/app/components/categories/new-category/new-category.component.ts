import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  category: Category;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
     let category: any;
    category = {
        name: form.value['name'],
      };
      this.categoryService.addCategory(category).subscribe(( result => {
        this.router.navigate(['categories']);
      }));
  }

}
