import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CarsByMakeComponent } from './cars-by-make/cars-by-make.component';
import { CarSearchComponent } from './car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    AboutComponent,
    HomeComponent,
    CarsByMakeComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
