import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list =[
          {title: 'lotus' ,description: "wedding Flower", unitPrice:10, quantity:2300, likes:654, imageUrl:''},
          {title: 'marigold' ,description: "wedding Flower", unitPrice:10, quantity:2300, likes:45534,imageUrl:''},
          {title: 'Lily' ,description: "wedding Flower", unitPrice:10, quantity:2300, likes:76, imageUrl:''}
        ]
  constructor() { console.log( "Service instance created l");}

  getAllProudcts (): any 
  {
    return this.list; 
  }

  getProduct (id: number): any 
  { 
    return this.list[id];
  }

}
