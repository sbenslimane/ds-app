import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bSidebarComponent } from './b2b-sidebar.component';

describe('B2bSidebarComponent', () => {
  let component: B2bSidebarComponent;
  let fixture: ComponentFixture<B2bSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
