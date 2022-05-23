import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsApiService {
  constructor(private https: HttpClient) {}

  getProducts() {
    return this.https
      .get<any>('https://dummyjson.com/products')
      .pipe(map((response: any) => response));
  }
  addToCart(post: any) {
    console.log(post?.product);
    return this.https.post('https://dummyjson.com/carts/add', post?.product);
  }
  getCartList() {
    return this.https
      .get<any>('https://dummyjson.com/carts/user/5')
      .pipe(map((response: any) => response));
  }
}
