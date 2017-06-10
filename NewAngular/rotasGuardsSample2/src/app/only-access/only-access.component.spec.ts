import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyAccessComponent } from './only-access.component';

describe('OnlyAccessComponent', () => {
  let component: OnlyAccessComponent;
  let fixture: ComponentFixture<OnlyAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
