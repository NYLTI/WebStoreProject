import { Injectable } from '@angular/core';
import { EmbeddedProduct } from '../interfaces/embedded-product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL:string = 'http://localhost:8010/v1/product';

  products: EmbeddedProduct[] = []

  constructor(private http:HttpClient) {  }

  getAll(): Observable<EmbeddedProduct>{
    return this.http.get<EmbeddedProduct>(this.baseURL, {params:{
      page:0,
      size:20
    }})
  }

}
