import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stats } from '../common/stats';
import { Player } from '../common/player';
import { ModalConfig } from '../common/modalConfig';
import { StatService } from '../service/stat.service';
import { ErrorComponent } from '../error/error.component';
import { ErrorConfig } from '../common/errorConfig';
import { BusinessMessages } from '../common/businessMessages';
import { ModalResponse } from '../common/modalResponse';
import { PlayerServiceService } from '../service/player-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalConfig: ModalConfig;
  @Output() toggleVisible: EventEmitter<ModalResponse> = new EventEmitter();
  statForm: FormGroup;
  player: Player;

  error: Boolean;

  errorConfig: ErrorConfig;

  constructor(private formBuilder: FormBuilder, private statService: StatService, private playerService: PlayerServiceService) {
   }

  ngOnInit() {
    console.log('modal form');
    this.createForm();

    this.player = this.modalConfig.getPlayer();

    if (this.modalConfig === undefined ) {
      console.log('in if');
      this.modalConfig = new ModalConfig();
      this.modalConfig.setVisibile(false);
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
      gameNumber: undefined
    });
  }
  save() {
    if (this.statForm.dirty) {
      if (this.statService.validateStats(this.statForm)) {
       const success = this.updateStats();

       if (success) {
         this.close();
       } else {
         console.log('display errors');
         this.error = true;
       }
      } else {
        console.log('display errors');
        this.errorConfig = new ErrorConfig(BusinessMessages.HITS_GREATER_THAN_AT_BATS);
        this.error = true;
      }
    }
  }

  updateStats() {
    console.log('Updating Stats');
    let success = true;

    if (this.statForm.dirty) {
      let stat = this.modalConfig.getPlayer().stats;

      stat = this.updatePlayerStats(stat);
  
      if (this.modalConfig.getPlayer().games === undefined) {
        this.modalConfig.getPlayer().games = [];
      }

      this.modalConfig.getPlayer().games.push(stat);

      this.playerService.updatePlayer(this.modalConfig.getPlayer());

      //this.modalConfig.getPlayer().setStats(stat);
    }
  //  console.log(this.modalConfig.getPlayer());
    return success;
  }

  private updatePlayerStats(currentStat: Stats) {
    Object.keys(this.statForm.controls).forEach(key => {
      const stat = this.statForm.get(key).value;

      if (stat !== undefined && stat !== null) {
        if (currentStat === undefined) {
          currentStat = new Stats();
        }
        this.statService.statMapper(key, stat, currentStat);
      }
    });
    currentStat.gameNumber = this.statForm.get('gameNumber').value;
    console.log(currentStat);
    return currentStat;
  }

  close() {
    this.updateVisible();
    this.createForm();
    this.toggleError();
  }

  toggleError() {
    this.error = false;
  }
  updateVisible() {
    this.toggleError();

    const modalResponse = new ModalResponse();
    modalResponse.setCurrentStat(this.modalConfig.getPlayer().stats);
    modalResponse.setVisibile(false);
    this.toggleVisible.emit(modalResponse);
  }
}
