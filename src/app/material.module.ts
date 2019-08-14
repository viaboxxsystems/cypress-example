import {NgModule} from '@angular/core';

import {
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatTooltipModule,
  MatButtonModule,
  MatPaginatorModule,
  MatDatepickerModule, MatRadioModule, MatCheckboxModule, MatNativeDateModule, MatCardModule, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {
}
