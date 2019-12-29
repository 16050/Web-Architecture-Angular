import { Component, OnInit } from '@angular/core';
import {GearService} from '../../services/gear.service';
import { Gear } from '../../models/gear';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gear',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})
export class GearsComponent implements OnInit {

  gears: Gear[] = [];

  constructor(private gearService: GearService, private router:Router) { }

  ngOnInit() {
    this.getGears();
  }

  getGears()
  {
    this.gearService.findAll().subscribe(gears => this.gears = gears);
  }

  onViewGear(id:any) {
    this.router.navigate(['gears', +id]);
  }
}
