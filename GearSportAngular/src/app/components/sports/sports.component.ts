import { Component, OnInit } from '@angular/core';
import {SportService} from '../../services/sport.service';
import { Sport } from '../../models/sport';
import {Router} from '@angular/router';
import {GearService} from '../../services/gear.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sports: Sport[] = [];

  constructor(private sportService: SportService, private router:Router) { }

  ngOnInit() {
    this.getSports();
  }

  getSports()
  {
    this.sportService.findAll().subscribe(sports => this.sports = sports);
  }

  showSport(id:any) {
    this.router.navigate(['sports', +id]);
  }
}
