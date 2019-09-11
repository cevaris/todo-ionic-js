export enum KanbanState {
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
    id: String;
    title: String
    state: KanbanState
    description: String;

    constructor(id: String, title: String, description: String, state: KanbanState) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.state = state;
    }
}

export function kanbanStateFromString(str: string): KanbanState {
    switch (str) {
        case KanbanState.TODO:
            return KanbanState.TODO
        case KanbanState.IN_PROGRESS:
            return KanbanState.IN_PROGRESS
        case KanbanState.COMPLETE:
            return KanbanState.COMPLETE
        default:
            throw Error(`${str} not enum not found`)
    }
}

export function newKanbanCard(): KanbanCard {
    return new KanbanCard(null, '', '', KanbanState.TODO)
}