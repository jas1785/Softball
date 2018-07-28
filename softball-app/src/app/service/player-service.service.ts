import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MockPlayerServiceService } from '../MockData/mock-player-service.service';

import { Player } from '../common/player';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { HttpResponse } from 'selenium-webdriver/http';


@Injectable()
export class PlayerServiceService {

  baseurl = 'http://localhost:8080/';
  playersUrl = 'players/';
  url: String; // = '';//this.baseurl + this.getPlayers;
  players: Player[];
  player: Player;
  constructor(private http: HttpClient) { }

  get(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseurl + this.playersUrl)
          .map( data  => {
            this.players = [];
            for (let entry of data) {
              console.log(entry as Player); // 1, "string", false
             console.log( entry._id);
              this.players.push(entry);
          }
              return this.players;
            });
  }

  add(player) {
    const createPlayer = 'create/';
    const url = this.baseurl + this.playersUrl + createPlayer;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    console.log(url);
    return this.http.post(url, player, {headers: headers});
  }
  find(id): Observable<Player> {
    console.log(this.baseurl + this.playersUrl + id);
   return this.http.get(this.baseurl + this.playersUrl + id)
              .map(data => { this.player = data as Player; console.log(data);
                      return this.player;
                  });
  }
   updatePlayer(player: Player) {

    const update = 'update/';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log('update');
    console.log(player);
    return this.http.put(this.baseurl + this.playersUrl + update, player, {headers: headers});
  }
}
