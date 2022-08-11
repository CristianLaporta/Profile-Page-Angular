import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailProfileComponent } from './email-profile.component';

describe('EmailProfileComponent', () => {
  let component: EmailProfileComponent;
  let fixture: ComponentFixture<EmailProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
