import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTodoPage } from './search-todo.page';

describe('SearchTodoPage', () => {
  let component: SearchTodoPage;
  let fixture: ComponentFixture<SearchTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
