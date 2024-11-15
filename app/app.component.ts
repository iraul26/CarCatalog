import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from './service/carservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'The Car Catalog';
  model: string = "";
  carMakes: string[] = [];

  constructor(private carService: CarserviceService, private router: Router) {}

  searchCar(): void {
    this.router.navigate(['/search'], { queryParams: { model: this.model } });
  }
  ngOnInit(): void {
    this.carService.getCarMakes((makes) => {
      this.carMakes = makes;
    });
  }
}
