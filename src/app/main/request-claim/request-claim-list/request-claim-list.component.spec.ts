import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestClaimListComponent } from './request-claim-list.component';

describe('RequestClaimListComponent', () => {
  let component: RequestClaimListComponent;
  let fixture: ComponentFixture<RequestClaimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestClaimListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestClaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
