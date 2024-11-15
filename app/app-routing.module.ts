import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CarsByMakeComponent } from './cars-by-make/cars-by-make.component';
import { CarSearchComponent } from './car-search/car-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //default route
  { path: 'cars/:make', component: CarsByMakeComponent },
  { path: 'search', component: CarSearchComponent },
  { path: 'create', component: CreateCarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
