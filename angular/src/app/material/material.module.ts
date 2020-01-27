import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatGridListModule
]; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: modules
})
export class MaterialModule { }
