import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product: {
    inventory?: any;
    components_included?: any;
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    rating: number,
    brand: string,
    color?: string,
    connectivity?: string,
    wireless?: boolean,
    discount?: number
  } = undefined;

}
