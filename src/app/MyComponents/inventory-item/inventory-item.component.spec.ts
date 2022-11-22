import { Input, Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from 'src/app/Item';

import { InventoryItemComponent } from './inventory-item.component';

xdescribe('InventoryItemComponent', () => {
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
    fixture.detectChanges();
  });

  it('should create the app', () => {
    //console.log(component);
    //const item = new Item();
   // component.items = item;
    expect(component).toBeTruthy();
  });
});
