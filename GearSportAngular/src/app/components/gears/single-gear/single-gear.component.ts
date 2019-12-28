import { Component, OnInit } from '@angular/core';
import { GearService } from '../../../services/gear.service';
import { Gear } from '../../../models/gear';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-gear',
  templateUrl: './single-gear.component.html',
  styleUrls: ['./single-gear.component.css']
})
export class SingleGearComponent implements OnInit {

  single_gear: Gear[] = [];

  constructor(private route: ActivatedRoute, private gearService: GearService, private router: Router) {}

  ngOnInit() {
    this.getSingleGear();
  }

  getSingleGear()
  {
    const id = this.route.snapshot.params['id'];
    this.gearService.findOne(id).subscribe(single_gear => this.single_gear = single_gear );
  }
}
