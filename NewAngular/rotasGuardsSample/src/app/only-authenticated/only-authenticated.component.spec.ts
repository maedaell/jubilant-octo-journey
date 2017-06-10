import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyAuthenticatedComponent } from './only-authenticated.component';

describe('OnlyAuthenticatedComponent', () => {
  let component: OnlyAuthenticatedComponent;
  let fixture: ComponentFixture<OnlyAuthenticatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyAuthenticatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
