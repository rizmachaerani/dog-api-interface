import { Component, OnInit } from '@angular/core';
import { DogApiService } from './services/dog-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dogs:any;

  constructor(private service: DogApiService) {}

  ngOnInit() {
      this.service.getDogs()
        .subscribe(response => {
          console.log(response)
        })
  }
}
