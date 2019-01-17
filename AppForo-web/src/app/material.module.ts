import { NgModule } from '@angular/core';

import {
  MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ]
})
export class MaterialModule {}