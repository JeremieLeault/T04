import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwLandingPageComponent } from './fw-landing-page.component';

describe('FwLandingPageComponent', () => {
  let component: FwLandingPageComponent;
  let fixture: ComponentFixture<FwLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
