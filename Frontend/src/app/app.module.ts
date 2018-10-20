import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { HeadermobileComponent } from './Components/headermobile/headermobile.component';
import { HomesectionComponent } from './Components/home/homesection/homesection.component';
import { DataShowDirective } from './Directives/DataShow/data-show.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent,
    HeadermobileComponent,
    HomesectionComponent,
    DataShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
