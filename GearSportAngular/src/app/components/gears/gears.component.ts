import { Component, OnInit } from '@angular/core';
import {GearService} from '../../services/gear.service';
import { Gear } from '../../models/gear';

@Component({
  selector: 'app-gear',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})
export class GearsComponent implements OnInit {

  gears: Gear[] = [];

  constructor(private gearService: GearService) { }

  ngOnInit() {
    this.getGears();
  }

  getGears()
  {
    this.gearService.findAll().subscribe(gears => this.gears = gears);
  }

}
