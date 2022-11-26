import { DebugElement, NgModule } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


import { AddItemsComponent } from './add-items.component';

describe('AddItemsComponent', () => {
  let component: AddItemsComponent;
  let fixture: ComponentFixture<AddItemsComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [
      //   FormsModule
      // ],
      declarations: [ AddItemsComponent,NgForm ]
      
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
  it('should be called onSubmit method after submitting the form ', fakeAsync(() =>{
    
    const getForm = fixture.debugElement.query(By.css('form'));
    //creating jasmine spy for creating fake form submit
    const spy = spyOn(component, 'onSubmit'); 
    //submitting the form
    getForm.triggerEventHandler('ngSubmit');
    expect(spy).toHaveBeenCalled();

  }))
  
});
