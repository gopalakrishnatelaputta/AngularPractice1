import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

selectedProduct:Product | null=null;

selectProduct(product:Product){
this.selectedProduct=product;
}

@Input() productListComp:ProductListComponent;

product:Product;
// @Input() product: Product;
ngOnInit() {
this.product=this.productListComp.selectedProduct;

}

}
