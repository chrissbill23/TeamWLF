import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjComponent } from './search-proj.component';

describe('SearchProjComponent', () => {
  let component: SearchProjComponent;
  let fixture: ComponentFixture<SearchProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
