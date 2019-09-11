import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, } from 'rxjs';
import { KanbanCard, KanbanState } from '../data/models/kanban-card';

export abstract class IKanbanCardService {
  abstract observable(): Observable<KanbanCard[]>;
  abstract write(card: KanbanCard): Promise<void>;
  abstract readAll(): void;
}

/**
 * Mock data until we have a real database setup
 */
const dummyData: KanbanCard[] = [
  new KanbanCard(
    newId(4),
    'Ipsum anim ea duis dolore ut consequat exercitation sit ipsum.',
    'Pariatur do labore ad non laboris minim excepteur et. Sit nostrud velit et magna sint occaecat deserunt reprehenderit ut excepteur veniam enim laborum sunt. Nostrud nostrud pariatur elit sunt cillum ut anim dolor. Nostrud ut officia irure reprehenderit ea est ad.',
    KanbanState.TODO
  ),
  new KanbanCard(
    newId(4),
    'Mollit labore consectetur minim sunt mollit exercitation velit commodo nisi minim aliquip amet in.',
    'Officia proident nostrud minim ea aliquip aliqua. Proident aliqua minim est non nostrud dolore veniam sit esse do irure nulla do. Excepteur fugiat velit dolore elit. Aliquip voluptate Lorem in reprehenderit cillum magna. Dolor enim non irure cupidatat nulla veniam ea. Quis enim adipisicing ea nulla voluptate aliquip adipisicing nisi qui.',
    KanbanState.TODO
  ),
  new KanbanCard(
    newId(4),
    'Lorem mollit ut est aliqua officia sunt officia eu anim.',
    'Amet laboris aute et elit do enim cillum dolore. Sunt quis dolore pariatur proident id sit anim. Qui tempor mollit cillum consectetur sunt magna do nulla voluptate eiusmod. Duis commodo commodo reprehenderit tempor fugiat cillum.',
    KanbanState.TODO
  ),
  new KanbanCard(
    newId(4),
    'Veniam tempor eiusmod laboris nisi nisi do anim aliquip sint exercitation duis adipisicing.',
    'Lorem adipisicing fugiat aliquip commodo. Ullamco laboris non ullamco magna nostrud consectetur laboris esse culpa occaecat velit mollit. Fugiat sit dolore excepteur amet occaecat consequat incididunt. Mollit laboris cillum Lorem sunt qui cupidatat pariatur. Ad culpa tempor aliqua culpa occaecat ut. Esse officia et velit incididunt ullamco laborum in cillum consectetur culpa deserunt.',
    KanbanState.IN_PROGRESS
  ),
  new KanbanCard(
    newId(4),
    'Esse pariatur excepteur nostrud non excepteur sunt dolore consectetur aliqua.',
    'Nostrud consequat labore non magna fugiat sunt duis nostrud exercitation in et aliquip consectetur aliqua. Deserunt quis nisi laboris sit ut consectetur laboris nostrud do consectetur. Duis laboris laboris laboris esse consequat enim. Commodo laborum magna eu magna adipisicing. Nisi consequat sint cupidatat sunt nostrud adipisicing do do fugiat.',
    KanbanState.TODO
  ),
  new KanbanCard(
    newId(4),
    'Duis pariatur id commodo consectetur.',
    'Id deserunt pariatur eu ullamco eu dolore aliqua. Cupidatat ullamco ex aute adipisicing sit ad. Nulla commodo commodo esse incididunt ullamco qui reprehenderit amet elit occaecat quis occaecat. Mollit ut eiusmod velit consequat ut deserunt. Ad do incididunt sit minim commodo non ad Lorem aliqua tempor.',
    KanbanState.TODO
  ),
  new KanbanCard(
    newId(4),
    'Voluptate excepteur id mollit dolor commodo pariatur est irure nostrud adipisicing duis enim.',
    'Dolor aute laborum sint duis do occaecat eiusmod minim proident nostrud ea. Enim aute deserunt nulla elit ex. Esse cillum ex adipisicing nostrud.',
    KanbanState.IN_PROGRESS
  ),
  new KanbanCard(
    newId(4),
    'Nostrud et exercitation exercitation dolore id eu sint duis aute fugiat sint.',
    'Tempor do eiusmod commodo dolore et ad mollit dolore nisi labore irure excepteur. Sunt ex consectetur ea eu proident fugiat dolore sunt laboris. Et sint irure aliqua quis adipisicing duis aliquip qui deserunt irure laborum deserunt aute. Velit occaecat veniam commodo laborum sunt occaecat eu et est.',
    KanbanState.COMPLETE
  ),
  new KanbanCard(
    newId(4),
    'Dolor ad consectetur velit cupidatat deserunt ut elit reprehenderit veniam aliqua ea.',
    'Quis sunt nulla laborum velit duis tempor ex elit dolor ullamco commodo amet irure. Dolor cupidatat consequat commodo aute non non sit occaecat exercitation esse. Tempor eu enim amet velit voluptate aliquip eiusmod ea consequat occaecat id adipisicing quis laboris.',
    KanbanState.COMPLETE
  ),
  new KanbanCard(
    newId(4),
    'Sunt eiusmod ex officia laboris sunt eu amet velit minim ullamco in.',
    'Aliqua nostrud Lorem velit qui Lorem et consectetur sint esse. Cupidatat ut eu pariatur laboris incididunt irure. Anim est commodo ea commodo proident culpa aliquip dolor non deserunt velit. Dolore cupidatat do irure est sit labore pariatur dolor ut cillum ut reprehenderit consectetur.',
    KanbanState.TODO
  ),
  new KanbanCard(
    newId(4),
    'Ex laborum aute est esse ex sunt tempor laboris consectetur.',
    'Laborum quis id amet elit velit consequat deserunt. Elit Lorem velit laboris esse laboris nostrud aliqua esse aute fugiat sint quis deserunt dolor. Velit nisi quis in qui consectetur culpa nisi mollit excepteur adipisicing deserunt. Do duis minim magna deserunt aliquip nulla.',
    KanbanState.COMPLETE
  ),
  new KanbanCard(
    newId(4),
    'Fugiat ex est quis ut id duis nostrud incididunt elit officia exercitation laborum.',
    'Nulla minim consequat eiusmod ullamco fugiat cupidatat non excepteur commodo in reprehenderit. Consequat sint nostrud consectetur adipisicing adipisicing. Irure fugiat magna eiusmod velit id eiusmod.',
    KanbanState.IN_PROGRESS
  ),
];

@Injectable({
  providedIn: 'root'
})
export class KanbanCardService implements IKanbanCardService {
  private subject: BehaviorSubject<KanbanCard[]>;
  private data: KanbanCard[];

  constructor() {
    this.subject = new BehaviorSubject<KanbanCard[]>([]);
    this.data = dummyData;
  }

  observable(): Observable<KanbanCard[]> {
    return this.subject.asObservable();
  }

  readAll(): void {
    this.subject.next(this.data);
  }

  write(card: KanbanCard): Promise<void> {
    console.log('saving card', card);
    const oldCardIdx = this.data.findIndex((c: KanbanCard) => c.id === card.id);
    // console.log(oldCardIdx, store.map(c => c.id));
    if (oldCardIdx >= 0) {
      this.data[oldCardIdx] = card;
      console.log('updated', card.id);
    } else {
      card.id = newId(4);
      console.log('created', card.id);
      this.data.push(card);
    }
    this.subject.next(this.data)
    return Promise.resolve();
  }
}

function newId(length: number) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
