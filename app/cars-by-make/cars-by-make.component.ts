import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarserviceService } from '../service/carservice.service';
import { Car } from '../models/cars.model';

@Component({
  selector: 'app-cars-by-make',
  templateUrl: './cars-by-make.component.html',
  styleUrl: './cars-by-make.component.css'
})
export class CarsByMakeComponent implements OnInit {
  cars: Car[] = [];
  make: string = "";
  selectedCar: Car = { id: 0, make: "", model: "", year: 0, description: "", url: "" };
  showModal: boolean = false;

  constructor(private route: ActivatedRoute, private carService: CarserviceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.make = params.get('make')!;
      this.fetchCarsByMake(this.make);
    });
  }

  fetchCarsByMake(make: string): void {
    this.carService.getCarsByMake(make, (cars) => {
      this.cars = cars;
    });
  }

  deleteCar(id: number): void {
    const confirmed = window.confirm("Are you sure you want to delete this car?");
    if (confirmed) {
      this.carService.deleteCar(id, () => {
        this.cars = this.cars.filter(car => car.id !== id);
      });
    }
  }

  openUpdateModal(car: Car): void {
    this.selectedCar = { ...car };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  updateCar(): void {
    if (this.selectedCar.id) {
      this.carService.updateCar(this.selectedCar, () => {
        const index = this.cars.findIndex(car => car.id === this.selectedCar.id);
        if (index !== -1) {
          this.cars[index] = { ...this.selectedCar };
        }
        this.closeModal();
      });
    }
  }
}
