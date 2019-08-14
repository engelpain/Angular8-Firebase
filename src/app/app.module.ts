import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive forms module
import { ReactiveFormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';

// Service to shared orders
import { OrdersService } from "./shared/orders.service"

// Firebase
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    // shared orders
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
