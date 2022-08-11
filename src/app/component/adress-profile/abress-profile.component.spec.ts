import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbressProfileComponent } from './abress-profile.component';

describe('AbressProfileComponent', () => {
  let component: AbressProfileComponent;
  let fixture: ComponentFixture<AbressProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbressProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbressProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
