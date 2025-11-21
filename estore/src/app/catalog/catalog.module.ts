import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './products/details/details.component';
import { ListComponent } from './products/list/list.component';
import { CounterComponent } from './products/counter/counter.component';
import { InsertComponent } from './products/insert/insert.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [ CommonModule ,ListComponent,DetailsComponent,CounterComponent,InsertComponent,HttpClientModule],

  exports: [ ListComponent, InsertComponent]
})
export class CatalogModule { }
