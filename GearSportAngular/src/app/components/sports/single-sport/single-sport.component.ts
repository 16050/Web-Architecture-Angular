import { Component, OnInit } from '@angular/core';
import { SportService } from '../../../services/sport.service';
import { Sport } from '../../../models/sport';
import { ActivatedRoute, Router } from '@angular/router';
import {GearService} from '../../../services/gear.service';

@Component({
  selector: 'app-single-sport',
  templateUrl: './single-sport.component.html',
  styleUrls: ['./single-sport.component.css']
})
export class SingleSportComponent implements OnInit {

  sport: Sport;

  constructor(private route: ActivatedRoute, private sportService: SportService, private gearService: GearService, private router: Router) {}

  ngOnInit() {
    this.getSingleSport();
  }

  getSingleSport()
  {
    this.sport = new Sport('', '', '');
    const id = this.route.snapshot.params['id'];
    this.sportService.findOne(+id).subscribe(single_sport => this.sport = single_sport);
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
