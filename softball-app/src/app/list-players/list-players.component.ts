import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  @Input() players;

  constructor() { }

  ngOnInit() {
  }
}
