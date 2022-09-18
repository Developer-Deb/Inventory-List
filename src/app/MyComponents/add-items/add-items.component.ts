import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Item';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  @Output() itemsAdd: EventEmitter<Item> = new EventEmitter();  //emmiting an event
  
  title!:string
  desc!:string
  qty!:number
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const items ={
      sno:8,
      title:this.title,
      desc: this.desc,
      qty:this.qty,
      active:true
    }
    
    this.itemsAdd.emit(items);
  }


}
