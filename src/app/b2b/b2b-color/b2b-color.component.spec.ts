import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bColorComponent } from './b2b-color.component';

describe('B2bColorComponent', () => {
  let component: B2bColorComponent;
  let fixture: ComponentFixture<B2bColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
