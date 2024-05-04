import { TestBed } from '@angular/core/testing';

import { CarSeatCategoryService } from './car-seat-category.service';

describe('CarSeatCategoryService', () => {
  let service: CarSeatCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSeatCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
