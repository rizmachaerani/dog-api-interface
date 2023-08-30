import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  productId:any;
  dog:any;
  url = "https://api.thedogapi.com/v1/breeds/"

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient) { 
    this.productId = this.actRoute.snapshot.params["id"];
    this.url = this.url + this.productId
    console.log(this.url)
  }
  
  ngOnInit() {
    this.http.get<any[]>(this.url)
      .subscribe(res => {
        this.dog = res
        this.dog.image_url = "https://cdn2.thedogapi.com/images/" + this.dog.reference_image_id + ".jpg"
        console.log(this.dog.image_url)
      })
  }
}
