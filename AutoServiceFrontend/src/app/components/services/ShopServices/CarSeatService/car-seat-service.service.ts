import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CreateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/CreateCarSeat';
import { ResponceModel } from '../../../models/models/ResponceModels/responcemodel';
import { UpdateCarSeat } from '../../../models/models/ShopModels/CarSeatModels/UpdateCarSeat';
import { DeleteCarSeatBrand } from '../../../models/models/ShopModels/CarSeatBrandModels/DeleteCarSeatBrand';
import { CarSeatModel } from '../../../models/models/ShopModels/CarSeatModels/CarSeatModel';
import { GetAll } from '../../../models/viewmodels/getAllOnlyByPage';

@Injectable({
  providedIn: 'root',
})
export class CarSeatServiceService {
  private apiUrl = environment.apiUrl + 'CarSeat/';
  constructor(private http: HttpClient) {}

  Create(date: CreateCarSeat) {
    return this.http.post<ResponceModel>(this.apiUrl + `CreateCarSeat`, date);
  }

  update(date: UpdateCarSeat) {
    return this.http.put<ResponceModel>(this.apiUrl + `UpdateCarSeat`, date);
  }

  delete(date: DeleteCarSeatBrand) {
    return this.http.delete<ResponceModel>(
      this.apiUrl + `DeleteCarSeat?id=${date}`
    );
  }

  getAll(date: GetAll) {
    return this.http.get<CarSeatModel[]>(
      this.apiUrl +
        `GetAllCarSeatBrand?PageIndex=${date.PageIndex}Size=${date.Size}`
    );
  }
}
