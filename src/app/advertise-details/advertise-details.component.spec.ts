import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseDetailsComponent } from './advertise-details.component';

describe('AdvertiseDetailsComponent', () => {
  let component: AdvertiseDetailsComponent;
  let fixture: ComponentFixture<AdvertiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
