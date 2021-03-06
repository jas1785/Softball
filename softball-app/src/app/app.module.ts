import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InputPlayerComponent } from './input-player/input-player.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { ModalComponent } from './modal/modal.component';

import { PlayerServiceService } from './service/player-service.service';
import { MockPlayerServiceService } from './MockData/mock-player-service.service';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { StatService } from './service/stat.service';
import { StatLeaderServiceService } from './service/stat-leader-service.service';

import { ErrorComponent } from './error/error.component';
import { LeaderBoxComponent } from './leader-box/leader-box.component';
import { AppStatLeaderComponent } from './app-stat-leader/app-stat-leader.component';
import { StatLeaderBoxComponent } from './stat-leader-box/stat-leader-box.component';

const appRoutes: Routes = [
  { path: 'player/:id', component: PlayerComponent },
  { path: 'player/:id/:read', component: PlayerComponent },
  { path: 'home', component: HomeComponent},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputPlayerComponent,
    ListPlayersComponent,
    ModalComponent,
    PlayerComponent,
    HomeComponent,
    TrendingComponent,
    ErrorComponent,
    LeaderBoxComponent,
    AppStatLeaderComponent,
    StatLeaderBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PlayerServiceService, MockPlayerServiceService, StatService, StatLeaderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
