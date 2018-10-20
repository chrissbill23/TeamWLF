import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermobileComponent } from './headermobile.component';

describe('HeadermobileComponent', () => {
  let component: HeadermobileComponent;
  let fixture: ComponentFixture<HeadermobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadermobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadermobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
