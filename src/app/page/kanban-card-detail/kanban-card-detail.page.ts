import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { KanbanCard, KanbanState } from 'src/app/data/models/kanban-card';
import { IKanbanCardService } from 'src/app/service/kanban-card.service';

@Component({
  selector: 'app-kanban-card-detail',
  templateUrl: './kanban-card-detail.page.html',
  styleUrls: ['./kanban-card-detail.page.scss'],
})
export class KanbanCardDetailPage implements OnInit {
  private card: KanbanCard;

  title: String
  description: String
  state: KanbanState

  cardForm: FormGroup;
  validation_messages = {
    title: [
      { type: 'required', message: 'Title is required.' },
    ],
    description: [
      { type: 'required', message: 'Description is required.' },
    ],
  }

  constructor(
    private formBuilder: FormBuilder,
    private service: IKanbanCardService,
    navParams: NavParams,
    public modalController: ModalController,
  ) {
    this.card = navParams.get('card');
    this.cardForm = this.formBuilder.group({
      title: new FormControl(this.card.title, Validators.required),
      description: new FormControl(this.card.description, Validators.required),
      state: new FormControl(this.card.state, Validators.required)
    });

    console.log('caught', this.card);
  }

  ngOnInit() {
  }

  async submit(formArray: FormArray) {
    await this.service.save(formArray.value);
    await this.modalController.dismiss({
      'dismissed': true
    });
  }
}
