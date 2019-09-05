enum KanbanState {
    TODO = 'todo',
    IN_PROGRESS = 'in-progress',
    COMPLETE = 'complete'
}

export function kanbanStateFromString(str: string): KanbanState {
    const type = KanbanState[str];
    if (type === undefined) {
        throw Error(`${str} not enum not found`)
    }
    return type;
}

export interface IKanbanCard {
    title: String
    description: String
    state: KanbanState
}

export class KanbanCard {
    title: String

    description: String = 'Amet consectetur consequat nulla aute ea magna minim sit id. Aliqua adipisicing magna officia irure anim veniam voluptate exercitation nisi ex ea culpa. Officia aliquip ipsum deserunt qui enim et cupidatat exercitation amet deserunt excepteur aute. Lorem Lorem culpa incididunt enim adipisicing veniam nisi ut quis dolore exercitation deserunt anim.'
    state = KanbanState.TODO

    constructor(title: String) {
        this.title = title;
    }
}