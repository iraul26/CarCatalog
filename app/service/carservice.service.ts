import { Injectable } from '@angular/core';
import { Car } from '../models/cars.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  private host = "http://localhost:5001";

  constructor(private http: HttpClient) {};

  /**
   * typescript syntax to define a callback function with an array of cars as a parameter.
   * The callback returns void.
   * getCars also returns void, however these are defined independently
   */
  public getCars(callback: (cars: Car[]) => void): void {
    this.http.get<Car[]>(this.host + "/cars").subscribe((cars: Car[]) => {
      callback(cars);
    });
  }

  /**
   * method to get all car makes
   * @param callback
   */
  public getCarMakes(callback: (makes: string[]) => void): void {
    this.http.get<string[]>(this.host + "/cars/makes").subscribe((makes: string[]) => {
      callback(makes);
    });
  }

  /**
   * method to get all cars based on a certain make
   * @param make - the make of the cars to get
   * @param callback
   */
  public getCarsByMake(make: string, callback: (cars: Car[]) => void): void {
    this.http.get<Car[]>(`${this.host}/cars/search/make/${make}`).subscribe((cars: Car[]) => {
      callback(cars);
    });
  }

  /**
   * method to get car based on the model
   * @param model - the car model to get
   * @param callback
   */
  public searchCarByModel(model: string, callback: (car: Car) => void): void {
    this.http.get<Car>(`${this.host}/cars/search/model/${model}`).subscribe((car: Car) => {
      callback(car);
    });
  }

  /**
   * method to create a new car
   * @param car to create new car
   * @returns car id if created, -1 if error
   */
  public createCar(car: Car, callback: () => void): void {
    //add a new car
    this.http.post<Car>(this.host + "/cars", car).subscribe((data) => {
      callback();
    });
  }

  /**
   * method to update a certain car
   * @param album the car to update
   * @returns 0 if ok, -1 if car not found
   */
  public updateCar(car: Car, callback: () => void): void {
    this.http.put<Car>(this.host + "/cars/", car).subscribe((data) => {
      callback();
    });
  }

  /**
   * method to delete a car
   * @param id the car to delete
   * @returns 0 if ok, -1 if car not found
   */
  public deleteCar(id: number, callback: () => void): void {
    this.http.delete<Car>(this.host + "/cars/" + id).subscribe((data) => {
      callback();
    });
  }

}
