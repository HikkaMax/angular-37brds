import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  public getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

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
}
