import { CarSeatCategoryModel } from './../../../models/models/ShopModels/CraSeatCategoryModels/CarSeatCategoryModel';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/CreateCarSeat';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/UpdateCarSeat';
import { DeleteCarSeat } from '../../../models/models/ShopModels/CarSeatModels/DeleteCarSeat';
import { CarSeatModel } from '../../../models/models/ShopModels/CarSeatModels/CarSeatModel';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';
import { CreateCarSeatCategory } from '../../../models/models/ShopModels/CraSeatCategoryModels/CreateCarSeatCategory';

@Injectable({
  providedIn: 'root',
})
export class CarSeatCategoryService {
  private apiUrl = environment.apiUrl + 'CarSeat/';
  constructor(private http: HttpClient) {}

  Create(date: CreateCarSeatCategory) {
    return this.http.post<ResponceModel>(
      this.apiUrl + `CreateCarSeatCategory`,
      date
    );
  }

  getAll(date: GetAll) {
    return this.http.get<CarSeatCategoryModel[]>(
      this.apiUrl +
        `GetAllCarSeatCategory?PageIndex=${date.PageIndex}Size=${date.Size}`
    );
  }
}
