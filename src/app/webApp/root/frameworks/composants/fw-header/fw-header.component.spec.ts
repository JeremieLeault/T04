import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwHeaderComponent } from './fw-header.component';

describe('FwHeaderComponent', () => {
  let component: FwHeaderComponent;
  let fixture: ComponentFixture<FwHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
