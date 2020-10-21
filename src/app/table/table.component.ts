import { Component, OnInit } from "@angular/core";
import { data } from "../mock-service/data";
import Book from "../mock-service/book.interface";


export class TableComponent implements OnInit {
  constructor() {}

  // Set the data as a property so that it can be accessed by table.component.html
  books: Book[] = data;

  // Set up my shopping cart property
  shoppingCart: Book[] = [];

  cartTotal: number = 0;

  // Create a method to add items to my cart
  addToCart(book: Book) {
    console.log(book);
    // this.shoppingCart.push(book);
    this.shoppingCart = [...this.shoppingCart, book]; // Spread operator to append items

    this.cartTotal = this.shoppingCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
  } 

  removeFromCart(i: number) {
    //console.log(cartItem);
   // console.log(this.shoppingCart);
   console.log(i);

    this.cartTotal = this.cartTotal - cartItem.price;

    // @TODO:
    // Figure out how to make each cart item uniquely identifiable

    // Remove the item that the user wants to remove from this.shoppingCart

    // Update this.cartTotal
  }

  ngOnInit(): void {}
}
