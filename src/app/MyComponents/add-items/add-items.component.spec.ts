import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddItemsComponent } from './add-items.component';

describe('AddItemsComponent', () => {
  let component: AddItemsComponent;
  let fixture: ComponentFixture<AddItemsComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemsComponent,NgForm ],
      //imports: [NgForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemsComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    //console.log(component);
    expect(component).toBeTruthy();
  });
  it('should match the heading', () =>{
    let data = fixture.nativeElement;
    expect(data.querySelector('h4')?.textContent).toEqual('ADD A ITEM TO THE INVENTORY');
  })
  it('should match the form title', () =>{
    let data = fixture.nativeElement;
    expect(data.querySelector('.form-label')?.textContent).toEqual('Item Name');
  })
  it('should be called onSubmit method after submitting the form ', () =>{
    //creating jasmine spy for creating fake form submit
    const spy = spyOn(component, 'onSubmit'); 
    const compiled = fixture.debugElement.nativeElement;
    const getForm = fixture.debugElement.query(By.css('#form'));
    //submitting the form
    getForm.triggerEventHandler('submit', compiled);
    expect(component.onSubmit).toHaveBeenCalled();

  })
  
});
