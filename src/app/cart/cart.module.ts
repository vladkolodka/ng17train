import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CartListComponent, CartComponent],
  exports: [CartListComponent]
})
export class CartModule { }
