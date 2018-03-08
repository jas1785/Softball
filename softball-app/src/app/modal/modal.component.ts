import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stats } from '../common/stats';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() visible: boolean;
  @Input() currentStat: Stats;
  @Output()  toggleVisible: EventEmitter<boolean> = new EventEmitter();

  statForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    console.log('create form');
    this.createForm();
   }

  ngOnInit() {

  }

  createForm() {
    this.statForm = this.formBuilder.group({
      atBat: undefined,
      hits: undefined,
      double: undefined,
      triple: undefined,
      homerun: undefined,
      rbi: undefined,
      runs: undefined,
      strikeout: undefined,
      walk: undefined,
    });
  }
  save() {
    this.updateVisible();
  }

  close() {
    this.updateVisible();
  }

  updateVisible() {

    this.toggleVisible.emit(false);
  }
}
