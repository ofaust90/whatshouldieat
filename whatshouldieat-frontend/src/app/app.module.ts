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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditfooditemComponent } from './editfooditem/editfooditem.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontainerComponent,
    SuggestComponent,
    SuggestdetailviewComponent,
    FooditemsoverviewComponent,
    FooditemComponent,
    EditfooditemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
