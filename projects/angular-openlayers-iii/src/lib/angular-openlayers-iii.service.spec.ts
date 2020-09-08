import { TestBed } from '@angular/core/testing';

import { AngularOpenlayersIIIService } from './angular-openlayers-iii.service';

describe('AngularOpenlayersIIIService', () => {
  let service: AngularOpenlayersIIIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularOpenlayersIIIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
