import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
 
    AjoutComponent,
    ListComponent,
    HeaderComponent,
    UpdateComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
