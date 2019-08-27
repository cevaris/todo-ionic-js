import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTodoPage } from './kanban-todo.page';

describe('KanbanTodoPage', () => {
  let component: KanbanTodoPage;
  let fixture: ComponentFixture<KanbanTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
