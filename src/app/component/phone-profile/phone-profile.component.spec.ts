import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneProfileComponent } from './phone-profile.component';

describe('PhoneProfileComponent', () => {
  let component: PhoneProfileComponent;
  let fixture: ComponentFixture<PhoneProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
