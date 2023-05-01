import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestClaimDetailComponent } from './request-claim-detail.component';

describe('RequestClaimDetailComponent', () => {
  let component: RequestClaimDetailComponent;
  let fixture: ComponentFixture<RequestClaimDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestClaimDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestClaimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
