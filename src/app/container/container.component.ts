import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

searchText:string='';

setSearchText(value:string) {
this.searchText=value;
}

  product:any = {
    name :"Samsung Galaxy",
    price:"256",
    color:"Black",
    discount : 8.5,
    inStock: 5,
    pImg:'/assets/images/mobile.jpg'
}
getDiscountedPrice(){
return this.product.price * this.product.discount / 100
}
}
