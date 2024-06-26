import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

 product:any = {
      name :"Samsung Galaxy",
      price:"256",
      color:"Black",
      discount : 8.5,
      inStock: 0,
      pImg:'/assets/images/mobile.jpg'
 }
getDiscountedPrice(){
return this.product.price * this.product.discount / 100
}

}
