import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show<%= entity %>Component } from './show-<%= entityKebabCase %>.component';

describe('ShowU<%= entity %>Component', () => {
  let component: Show<%= entity %>Component;
  let fixture: ComponentFixture<Show<%= entity %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show<%= entity %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show<%= entity %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
