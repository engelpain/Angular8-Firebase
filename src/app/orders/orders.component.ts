import { Component, OnInit } from '@angular/core';

// Import the service on Component
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor( private ordersService: OrdersService ) { }

  ngOnInit() {
  }

  // Options
  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];


  // Create / Update
  coffeeOrder = [];
  addCoffee = coffee => this.coffeeOrder.push(coffee);

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }


  // Delete
  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };


}
