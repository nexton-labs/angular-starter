import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';


import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class CustomMaterialModule { }
