import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../service/carservice.service';
import { Car } from '../models/cars.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrl: './car-search.component.css'
})
export class CarSearchComponent implements OnInit {
  car: Car | null = null;
  model: string = "";

  constructor(private carService: CarserviceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //retrieve query parameter from URL
    this.route.queryParams.subscribe(params => {
      this.model = params['model'];
      this.searchCar();
    });
  }

  searchCar(): void {
    //check if model exists
    if (this.model) {
      this.carService.searchCarByModel(this.model, (car) => {
        this.car = car;
      });
    }
  }
}
