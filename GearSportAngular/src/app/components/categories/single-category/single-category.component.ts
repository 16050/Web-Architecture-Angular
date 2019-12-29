import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import { Category } from '../../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import {GearService} from '../../../services/gear.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  category: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private gearService: GearService, private router: Router) {}

  ngOnInit() {
    this.getSingleCategory();
  }

  getSingleCategory()
  {
    this.category = new Category('', '');
    const id = this.route.snapshot.params['id'];
    this.categoryService.findOne(+id).subscribe(single_category => this.category = single_category);
  }

  showGear(id:any) {
    this.router.navigate(['gears', +id]);
  }

  deleteGear(id: any) { // delete game
    this.gearService.delete(+id).subscribe((result => {
      this.router.navigate(['gears']);
    }));
  }
}
