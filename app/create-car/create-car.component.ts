import { Component, OnInit } from '@angular/core';
import { Car } from '../models/cars.model';
import { CarserviceService } from '../service/carservice.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent implements OnInit {
  wasSubmitted: boolean = false;

  car: Car = {
    id: Math.floor(Math.random() * 1000000),
    make: "",
    model: "",
    year: 0,
    description: "",
    url: ""
  };

  constructor(private service: CarserviceService){};

  onSubmit() {
    this.service.createCar(this.car, () => {
      console.log("Car created successfully");
      this.wasSubmitted = true;
    });
  }

  ngOnInit() {
  }
}
