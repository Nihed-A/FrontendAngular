import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestClaimAddComponent } from './request-claim-add.component';

describe('RequestClaimAddComponent', () => {
  let component: RequestClaimAddComponent;
  let fixture: ComponentFixture<RequestClaimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestClaimAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestClaimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
