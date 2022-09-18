import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemsComponent } from './MyComponents/add-items/add-items.component';
import { InventoryComponent } from './MyComponents/inventory/inventory.component';
import { InventoryItemComponent } from './MyComponents/inventory-item/inventory-item.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    InventoryComponent,
    InventoryItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
