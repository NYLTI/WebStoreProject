import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  providers:[ProductService],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products: Product[]

  constructor(private productService: ProductService){
    
  }

  ngOnInit(){
    this.productService.getAll()
    .subscribe({
      next:(response)=>{
        console.log('retrieving products');
        this.products = response._embedded.product;
      },
      error:(e)=>{
        console.log(e);
      },
      complete:()=>console.log('product resource retrieval completed')
    })
  }
}
