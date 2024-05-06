import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:8010/v1/product';

  products: Product[] = []

  constructor(private http:HttpClient) {  }

  // getAll(){
  //   this.http.get(url, )
  // }

}
