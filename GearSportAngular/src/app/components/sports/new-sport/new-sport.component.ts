import { Component, OnInit } from '@angular/core';
import {Sport} from '../../../models/sport';
import {ActivatedRoute, Router} from '@angular/router';
import {SportService} from '../../../services/sport.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-sport',
  templateUrl: './new-sport.component.html',
  styleUrls: ['./new-sport.component.css']
})
export class NewSportComponent implements OnInit {
  private sport: Sport;

  constructor(private router: Router, private route: ActivatedRoute, private sportService: SportService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    let sport: any;
    sport = {
      name: form.value['name'],
      description: form.value['description'],
    };
    this.sportService.addSport(sport).subscribe(( result => {
      this.router.navigate(['sports']);
    }));
  }

}
