import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stats } from '../common/stats';
import { Player } from '../common/player';
import { ModalConfig } from '../common/modalConfig';
import { StatService } from '../service/stat.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalConfig: ModalConfig;
  @Output() toggleVisible: EventEmitter<boolean> = new EventEmitter();

  visible: Boolean = false;

  config: ModalConfig;
  statForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private statService: StatService) {
    console.log('create form');
    this.createForm();
    console.log(this.visible + ' visibile');

    if (this.modalConfig === undefined ) {

      this.modalConfig = new ModalConfig();
      this.modalConfig.setVisibile(false);
      this.visible = false;
    }
   }

  ngOnInit() {
    console.log('modal form');

    if (this.modalConfig === undefined ) {

      this.modalConfig = new ModalConfig();
      this.modalConfig.setVisibile(false);
      this.visible = false;
    }
  }

  createForm() {
    this.statForm = this.formBuilder.group({
      atBat: undefined,
      single: undefined,
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
    if (this.statForm.dirty) {

      if (this.statService.validateStats(this.statForm)) {
        this.updateStats();
      }

      // clear form
      this.createForm();
    }
   // this.updateVisible();
  }

  updateStats() {
    console.log('Updating Stats');

    if (this.statForm.dirty) {
      let stat = this.modalConfig.getPlayer().stats;
      console.log(stat);
      this.updatePlayerStats(stat);
    }
  }

  private updatePlayerStats(currentStat: Stats) {
    Object.keys(this.statForm.controls).forEach(key => {
      const stat = this.statForm.get(key).value;

      if (stat !== undefined && stat !== null) {
        this.statService.statMapper(key, stat, currentStat);
      }
    });
  }

  close() {
    this.updateVisible();
    this.createForm();
  }

  updateVisible() {
    this.toggleVisible.emit(false);
  }
}
