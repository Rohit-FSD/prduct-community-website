import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  numberOfUsers:number;
  numberOfReviews:number;
  numberOfProducts:number;

  constructor(private statsService:StatsService) { }

  ngOnInit(): void {
      this.statsService.getNumberOfUsers().subscribe((data)=>{
        this.numberOfUsers=data;
      });

      this.statsService.getNumberOfReviews().subscribe((data)=>{
        this.numberOfReviews=data;
      })

      this.statsService.getNumberOfProducts().subscribe((data)=>{
        this.numberOfProducts=data;
      })
  }

}
