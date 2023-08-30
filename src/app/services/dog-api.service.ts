import { Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Dogs} from '../models/dogs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  url = "https://api.thedogapi.com/v1/breeds?api_key=live_cGyMQCAaJR4vlfE3Q9KzM5Wu1zH6pueRSULLHkqBDhtXDTyPff5Rvle779fPulpO"

  filter_1 = "https://api.thedogapi.com/v1/breeds/search?q=america"
  filter_2 = "https://api.thedogapi.com/v1/breeds/search?q=australia"
  search = "https://api.thedogapi.com/v1/breeds/search?q="

  constructor(private httpClient: HttpClient) { }

  httpOptions() {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getDogs () {
    return this.httpClient
      .get(this.url)
      .pipe(
        map((res: any) => {
          let dogs: Dogs[] = res.map((item: any) => {
            const { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image } = item
            return { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image }
          })

          return dogs || []
        }),
        retry(1),
        catchError(this.handleError) 
      )
  }

  searchFunction() {
    return this.httpClient
      .get(this.search)
      .pipe(
        map((res: any) => {
          let dogs: Dogs[] = res.map((item: any) => {
            const { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image } = item
            return { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image }
          })

          return dogs || []
        }),
        retry(1),
        catchError(this.handleError) 
      )
  }

  getDogsAmerica () {
    return this.httpClient
      .get(this.filter_1)
      .pipe(
        map((res: any) => {
          let dogs: Dogs[] = res.map((item: any) => {
            const { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image } = item
            return { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image }
          })

          return dogs || []
        }),
        retry(1),
        catchError(this.handleError) 
      )
  }

  getDogsAustralia () {
    return this.httpClient
      .get(this.filter_2)
      .pipe(
        map((res: any) => {
          let dogs: Dogs[] = res.map((item: any) => {
            const { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image } = item
            return { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, image }
          })

          return dogs || []
        }),
        retry(1),
        catchError(this.handleError) 
      )
  }

  handleError(err: any) {
    let message = ''
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
