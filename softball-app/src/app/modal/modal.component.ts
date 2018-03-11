import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stats } from '../common/stats';
import { Player } from '../common/player';
import { ModalConfig } from '../common/modalConfig';

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

  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.statForm.value);
    if (this.statForm.dirty) {

      console.log(this.validateStats());
      this.updateStats();

      // clear form
      this.createForm();
    }
   // this.updateVisible();
  }

  validateStats() {
    let hitCount = 0;
    let strikeOutCount = 0;
    let valid = false;
    if (this.statForm.value.atBat !== undefined) {
      const inputedAtBats = this.statForm.value.atBat;

      // get all possible hits
      hitCount += +(this.isNull(this.statForm.value.double) ? 0 : this.statForm.value.double);
      hitCount += +(this.isNull(this.statForm.value.triple) ? 0 : this.statForm.value.triple);
      hitCount += +(this.isNull(this.statForm.value.homerun) ? 0 : this.statForm.value.homerun);
      hitCount += +(this.isNull(this.statForm.value.single) ? 0 : this.statForm.value.single);

      strikeOutCount = +(this.isNull(this.statForm.value.strikeout) ? 0 : this.statForm.value.strikeout);

      // add strikeouts from at bats
      hitCount = strikeOutCount + hitCount;
      valid = this.isHitsEqualToAtBat(hitCount, this.statForm.value.atBat);
    }
   return valid;
  }

  isNull(value) {
    return value === null || value === undefined;
  }
  isHitsEqualToAtBat(hits, atBat) {
    return +hits === +atBat;
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

  console.log(currentStat);
    Object.keys(this.statForm.controls).forEach(key => {
      const stat = this.statForm.get(key).value;

      if (stat !== undefined && stat !== null) {
        this.statMapper( key, stat, currentStat );
      }
    });
  }

  private statMapper( key, value: number, currentStat: Stats ) {
    let hitCount = 0;
    if (key === 'atBat') {
      let total = currentStat.getAtBats();
      total += +value;
      currentStat.setAtbats(total);
    } else if (key === 'strikeout') {
      let total = currentStat.getStrikeOut();
      total += +value;
      currentStat.setStrikeOuts(total);
    } else if (key === 'rbi') {
      let total = currentStat.getRBI();
      total += +value;
      currentStat.setRBI(total);
    } else if (key === 'runs') {
      let total = currentStat.getRuns();
      total += +value;
      currentStat.setRuns(total);
    } else if (key === 'walks') {
      let total = currentStat.getWalks();
      total += +value;
      currentStat.setWalks(total);
    } else if (key === 'homerun') {
      let total = currentStat.getHomeRuns();
      total += +value;
      hitCount += +value;
      currentStat.setHomeRuns(total);
    } else if (key === 'double') {
      let total = currentStat.getDoubles();
      total += +value;
      hitCount += +value;
      currentStat.setDoubles(total);
    } else if (key === 'triple') {
      let total = currentStat.getTriples();
      total += +value;
      hitCount += value;
      currentStat.setTriples(total);
    } else if (key === 'single') {
      hitCount += +value;
    }

    if (hitCount > 0) {
      let total = currentStat.getHits();
      total += +hitCount;
      currentStat.setHits(total);
    }

    console.log(currentStat);
  }

  close() {
    this.updateVisible();
    this.createForm();
  }

  updateVisible() {
    this.toggleVisible.emit(false);
  }
}
