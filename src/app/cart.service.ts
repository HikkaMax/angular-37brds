import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  public addCart(product) {
    this.items.push(product);

    console.log("items", this.items);
  }

  public getItems() {
    console.log(11, this.items);
    return this.items;
  }

  public clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
