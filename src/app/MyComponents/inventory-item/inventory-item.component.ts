import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  //getting value of parent component inventory
  @Input() i!:number;
  @Input() items!:Item;
  //emmiting an event
  @Output() itemsDelete: EventEmitter<Item> = new EventEmitter(); 
  @Output() itemsCheckBox: EventEmitter<Item> = new EventEmitter();
  @Output() itemsQtyIncrease: EventEmitter<Item> = new EventEmitter();
  @Output() itemsQtyDecrease: EventEmitter<Item> = new EventEmitter();  
  constructor() {
    //@Input() items;

   }

  ngOnInit(): void {
  }
  onClick(items:Item)
  {
    this.itemsDelete.emit(items);
    
  }
  onCheckBoxClick(items:Item)
  {
    this.itemsCheckBox.emit(items);
  }
  onIncrease(items:Item)
  {
    this.itemsQtyIncrease.emit(items);
  }
  onDecrease(items:Item)
  {
    this.itemsQtyDecrease.emit(items);
    
  }

}
