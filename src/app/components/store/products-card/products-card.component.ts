import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html'
})
export class ProductsCardComponent implements OnInit {
@Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
