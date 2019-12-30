import { Component, OnInit } from '@angular/core';
import {Gear} from '../../../models/gear';
import {ActivatedRoute, Router} from '@angular/router';
import {GearService} from '../../../services/gear.service';
import {NgForm} from '@angular/forms';
import {Category} from '../../../models/category';
import {Sport} from '../../../models/sport';
import {SportService} from '../../../services/sport.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-new-gear',
  templateUrl: './new-gear.component.html',
  styleUrls: ['./new-gear.component.css']
})
export class NewGearComponent implements OnInit {
  sports: Sport;
  categories: Category;
  gear: Gear;
  id = this.route.snapshot.params['id'];
  add: any;

  constructor(private router: Router, private route: ActivatedRoute, private gearService: GearService, private sportService: SportService, private categoryService: CategoryService) {

    this.sportService.findAll().subscribe(sports => this.sports = sports)
    this.categoryService.findAll().subscribe(categories => this.categories = categories);

    if(this.id != undefined){
      this.gear = new Gear('', '', '', '','', '','');
      this.gearService.findOne(+this.id).subscribe(new_gear => { this.gear = new_gear;}
      );
      this.add = false;
    }else{ //edit
      this.add = true; }

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if(this.add == true){// add gear
      let gear: any;
      gear = {
        name: form.value['name'],
        gender: form.value['gender'],
        sport_id: form.value['sport_id'],
        category_id: form.value['category_id'],
        image: form.value['image'],
        description: form.value['description'],
        link: form.value['link']
      };
      this.gearService.addGear(gear).subscribe(( result => {
        this.router.navigate(['gears']);
      }));
    }

    else{
      let gear: any;
      gear = {
        name: form.value['name'],
        gender: form.value['gender'],
        sport_id: form.value['sport_id'],
        category_id: form.value['category_id'],
        image: form.value['image'],
        description: form.value['description'],
        link: form.value['link']
      };

      this.gearService.editGear(gear, this.id).subscribe(( result => {
        this.router.navigate(['gears']);
      }));
    }
  }
}
