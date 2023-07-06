import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './partial/login/login.component';
import { CarouselComponent } from './partial/carousel/carousel.component';
import { RentabilityTestComponent } from './partial/rentability-test/rentability-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    RentabilityTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
