import { Component, OnInit } from '@angular/core';
import { Dogs } from 'src/app/models/dogs';
import { DogApiService } from 'src/app/services/dog-api.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs:any;
  image:any;
  ref:any

  constructor(private dogAPIService: DogApiService) { }

  ngOnInit() {
    this.dogAPIService
      .getDogs()
      .subscribe((res: Dogs[]) => {
        this.dogs = res
      })

  }

  filterDogsAmerica() {
    this.dogAPIService
      .getDogsAmerica()
      .subscribe((res: Dogs[]) => {
        this.dogs = res  
      })
  }

  filterDogsAustralia() {
    this.dogAPIService
      .getDogsAustralia()
      .subscribe((res: Dogs[]) => {
        this.dogs = res
      })
  }
}
