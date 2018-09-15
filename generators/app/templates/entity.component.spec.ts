import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= entity %>Component } from './<%= entityKebabCase %>.component';

describe('<%= entity %>Component', () => {
  let component: <%= entity %>Component;
  let fixture: ComponentFixture<<%= entity %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= entity %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= entity %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
