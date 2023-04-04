import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { HttpClientModule } from '@angular/common/http';
import { SuggestComponent } from './suggest/suggest.component';
import { SuggestdetailviewComponent } from './suggestdetailview/suggestdetailview.component';
import { FooditemsoverviewComponent } from './fooditemsoverview/fooditemsoverview.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontainerComponent,
    SuggestComponent,
    SuggestdetailviewComponent,
    FooditemsoverviewComponent,
    FooditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
