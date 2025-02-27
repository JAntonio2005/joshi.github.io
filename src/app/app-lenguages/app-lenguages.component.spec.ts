import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLenguagesComponent } from './app-lenguages.component';

describe('AppLenguagesComponent', () => {
  let component: AppLenguagesComponent;
  let fixture: ComponentFixture<AppLenguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppLenguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLenguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
