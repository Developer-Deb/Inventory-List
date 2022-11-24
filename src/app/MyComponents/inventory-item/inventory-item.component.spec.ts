import { Input, NgModule, Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from 'src/app/Item';

import { InventoryItemComponent } from './inventory-item.component';

describe('InventoryItemComponent', () => {
  let component: InventoryItemComponent;
  let fixture: ComponentFixture<InventoryItemComponent>;
  //let item: Item ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //providers:[Item],
      declarations: [ InventoryItemComponent ]
    })
    .compileComponents();

    //item = new Item();
    fixture = TestBed.createComponent(InventoryItemComponent);
    component = fixture.componentInstance;
    //passing the values to input field of the component
    component.items ={
      sno: 1,
      title: "any",
      desc: "dhfjdf",
      qty:3,
      active: true
    }
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
