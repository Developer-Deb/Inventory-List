import { Input, NgModule, Pipe } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should call the onDecrease method after button click',fakeAsync(() => {
    //creating spy
    const spy = spyOn(component,"onDecrease");
    let button  = fixture.debugElement.query(By.css('#negetive'));
    button.triggerEventHandler('click');
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    expect(spy).toHaveBeenCalled();
  
  }));

  it('should call the onIncrease method after button click',fakeAsync(()=> {
    const spy = spyOn(component,"onIncrease");
    let button = fixture.debugElement.query(By.css('#positive'));
    button.triggerEventHandler('click');
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should call the onCheckBoxClick method after button click',fakeAsync( ()=>{
    const spy = spyOn(component,'onCheckBoxClick');
    let button = fixture.debugElement.query(By.css('.form-check-input'));
    button.triggerEventHandler('click');
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should call the onClick method after button click',fakeAsync(() => {
    //creating spy
    const spy = spyOn(component,"onClick");
    let button  = fixture.debugElement.query(By.css('#delete'));
    button.triggerEventHandler('click');
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    expect(spy).toHaveBeenCalled();
  
  }));
  
});
