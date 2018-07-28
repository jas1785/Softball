import { Component, OnInit, Input } from '@angular/core';
import { StatLeaderServiceService } from '../service/stat-leader-service.service';
import { Player } from '../common/player';
import { ListPlayerConfig } from '../common/listPlayerConfig';
import { LeaderConfig } from '../common/leaderConfig';


@Component({
  selector: 'app-stat-leader-box',
  templateUrl: './stat-leader-box.component.html',
  styleUrls: ['./stat-leader-box.component.css']
})
export class StatLeaderBoxComponent implements OnInit {

  @Input()
  leaderConfig: LeaderConfig;
  private leaderList: Player[];
  listPlayerConfig: ListPlayerConfig;

  constructor(private aStatLeaderServiceService: StatLeaderServiceService) { }

  ngOnInit() {/*
    this.leaderList = this.aStatLeaderServiceService.generateLeadersList(this.leaderConfig.getType());

    this.listPlayerConfig = new ListPlayerConfig();

    // only display the top 5
    this.listPlayerConfig.players = this.leaderList;
    this.listPlayerConfig.readOnly = true; */
  }
}
