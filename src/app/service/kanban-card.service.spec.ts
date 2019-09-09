import { TestBed } from '@angular/core/testing';

import { KanbanCardService } from './kanban-card.service';

describe('KanbanCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KanbanCardService = TestBed.get(KanbanCardService);
    expect(service).toBeTruthy();
  });
});
