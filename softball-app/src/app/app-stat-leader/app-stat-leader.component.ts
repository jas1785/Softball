import { Component, OnInit } from '@angular/core';
import { LeaderConfig } from '../common/leaderConfig';

@Component({
  selector: 'app-app-stat-leader',
  templateUrl: './app-stat-leader.component.html',
  styleUrls: ['./app-stat-leader.component.css']
})
export class AppStatLeaderComponent implements OnInit {

  constructor() { }

  averagerLeaderConfig: LeaderConfig;
  homeRunLeaderConfig: LeaderConfig;
  hitLeaderConfig: LeaderConfig;
  rbiLeaderConfig: LeaderConfig;

  ngOnInit() {

    this.averagerLeaderConfig = new LeaderConfig();
    this.averagerLeaderConfig.setTitle('Average');
    this.averagerLeaderConfig.setType('AVERAGE');

    this.homeRunLeaderConfig = new LeaderConfig();
    this.homeRunLeaderConfig.setTitle('Home Run');
    this.homeRunLeaderConfig.setType('HOME_RUN');

    this.hitLeaderConfig = new LeaderConfig();
    this.hitLeaderConfig.setTitle('HITS');
    this.hitLeaderConfig.setType('HITS');

    this.rbiLeaderConfig = new LeaderConfig();
    this.rbiLeaderConfig.setTitle('RBI');
    this.rbiLeaderConfig.setType('RBI');
  }

}
