enum KanbanState {
    TODO = 'todo',
    IN_PROGRESS = 'in-progress',
    COMPLETE = 'complete'
}

export interface IKanbanCard {
    title: String
    description: String
    state: KanbanState
}

export class KanbanCard {
    title: String

    description: String = ''
    state = KanbanState.TODO

    constructor(title: String) {
        this.title = title;
    }
}