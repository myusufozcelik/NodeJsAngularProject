import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselayerComponent } from './baselayer.component';

describe('BaselayerComponent', () => {
  let component: BaselayerComponent;
  let fixture: ComponentFixture<BaselayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
