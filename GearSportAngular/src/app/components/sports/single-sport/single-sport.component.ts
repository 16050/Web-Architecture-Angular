import { Component, OnInit } from '@angular/core';
import {SportService} from '../../../services/sport.service';
import { Sport } from '../../../models/sport';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-sport',
  templateUrl: './single-sport.component.html',
  styleUrls: ['./single-sport.component.css']
})
export class SingleSportComponent implements OnInit {

  single_sport: Sport[] = [];

  constructor(private route: ActivatedRoute, private sportService: SportService, private router: Router) {}

  ngOnInit() {
    this.getSingleSport();
  }

  getSingleSport()
  {
    const id = this.route.snapshot.params['id'];
    this.sportService.findOne(id).subscribe(single_sport => this.single_sport = single_sport);
  }
}
