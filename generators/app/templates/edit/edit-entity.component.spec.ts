import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit<%= entity %>Component } from './edit-<%= entityKebabCase %>.component';

describe('Edit<%= entity %>Component', () => {
  let component: Edit<%= entity %>Component;
  let fixture: ComponentFixture<Edit<%= entity %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit<%= entity %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit<%= entity %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
