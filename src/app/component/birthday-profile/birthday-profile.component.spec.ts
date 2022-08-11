import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayProfileComponent } from './birthday-profile.component';

describe('BirthdayProfileComponent', () => {
  let component: BirthdayProfileComponent;
  let fixture: ComponentFixture<BirthdayProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
