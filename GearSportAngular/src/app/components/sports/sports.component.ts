import { Component, OnInit } from '@angular/core';
import {SportService} from '../../services/sport.service';
import { Sport } from '../../models/sport';

@Component({
  selector: 'app-sport',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sports: Sport[] = [];

  constructor(private sportService: SportService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports()
  {
    this.sportService.findAll().subscribe(sports => this.sports = sports);
  }
}
