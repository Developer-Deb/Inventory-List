import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/Item';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  localItem: string;
  items!: Item[];//this is a array

  constructor() {
    this.localItem = (localStorage.getItem("items") || '{}'); // '{}' is a empty string
    if(this.localItem == '{}')
    {
      this.items =[];
    }
    else
    {
      this.items = JSON.parse(this.localItem);
    }
    
   }

  ngOnInit(): void {
  }
  deleteItems(items:Item)
  {
    //console.log(items);
    const index = this.items.indexOf(items);
    this.items.splice(index,1); //deleting the inventory list
    localStorage.setItem("items",JSON.stringify(this.items));

  }
  addItems(items:Item)
  {
    this.items.push(items); //adding the todos list
    localStorage.setItem("items",JSON.stringify(this.items));
  }
  toggleItems(items:Item)
  {
    const index = this.items.indexOf(items);
    this.items[index].active = !this.items[index].active;
    if(!this.items[index].active)
    {
      this.items[index].qty = 0;
      
    }
    if(this.items[index].active)
    {
      this.items[index].qty = 1;
      
    }
    localStorage.setItem("items",JSON.stringify(this.items));
  }
  increaseQty(items:Item)
  {
    const index = this.items.indexOf(items);
    this.items[index].qty = this.items[index].qty+1;
    if(!this.items[index].active)
    {
      this.items[index].active = true;
      
    }
    localStorage.setItem("items",JSON.stringify(this.items));
  }
  decreaseQty(items:Item)
  {
    const index = this.items.indexOf(items);
    if(this.items[index].qty == 0)
    {
      this.items[index].qty = 0;
      this.items[index].active = !this.items[index].active;
      
    }
    else if(this.items[index].qty == 1)
    {
      this.items[index].qty = this.items[index].qty-1;
      this.items[index].active = !this.items[index].active;
    }
    else
    {
      this.items[index].qty = this.items[index].qty-1;
    }
    localStorage.setItem("items",JSON.stringify(this.items));
  }


}
