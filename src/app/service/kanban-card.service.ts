import { Injectable } from '@angular/core';
import { KanbanCard } from '../data/models/kanban-card';

export abstract class IKanbanCardService {
  abstract save(card: KanbanCard): Promise<Boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class KanbanCardService implements IKanbanCardService {
  save(card: KanbanCard): Promise<Boolean> {
    console.log('saving card', card);
    return Promise.resolve(true);
  }
  constructor() { }
}
