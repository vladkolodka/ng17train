import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comments/comment/comment.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductListComponent, ProductComponent, CommentComponent],
  exports: [ProductListComponent]
})
export class ProductsModule { }
