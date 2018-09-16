import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add<%= entity %>Component } from './add-<%= entityKebabCase %>.component';

describe('Add<%= entity %>Component', () => {
  let component: Add<%= entity %>Component;
  let fixture: ComponentFixture<Add<%= entity %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add<%= entity %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add<%= entity %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
