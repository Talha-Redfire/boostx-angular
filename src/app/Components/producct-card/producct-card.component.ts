import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getproducts } from 'Store/products.selector';
import { ProductsInterface } from '../../../../Store/products.reducer';

@Component({
  selector: 'app-producct-card',
  templateUrl: './producct-card.component.html',
  styleUrls: ['./producct-card.component.scss'],
})
export class ProducctCardComponent implements OnInit {
  products$!: Observable<ProductsInterface>;
  constructor(private store: Store<{ productsList: ProductsInterface }>) {}

  ngOnInit(): void {
    // this.products$ = this.store.select('productsList');
    // this.products$ = this.store.select(getproducts);
    this.products$ = this.store.select('productsList');
    // console.log('sdfsdfsdf', this.store.select(getproducts));
    // this.store.select('productsList').subscribe((data) => {
    //   console.log('Data', data);
    // });
  }
}
