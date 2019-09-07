export enum KanbanState {
    TODO = 'todo',
    IN_PROGRESS = 'in-progress',
    COMPLETE = 'complete'
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

export interface IKanbanCard {
    title: String
    description: String
    state: KanbanState
}

export class KanbanCard {
    title: String
    state: KanbanState

    description: String = 'Amet consectetur consequat nulla aute ea magna minim sit id. Aliqua adipisicing magna officia irure anim veniam voluptate exercitation nisi ex ea culpa. Officia aliquip ipsum deserunt qui enim et cupidatat exercitation amet deserunt excepteur aute. Lorem Lorem culpa incididunt enim adipisicing veniam nisi ut quis dolore exercitation deserunt anim.'

    constructor(title: String, state: KanbanState = KanbanState.TODO) {
        this.title = title;
        this.state = state;
    }
}