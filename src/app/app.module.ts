import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { WelcomeComponent } from './components/game/welcome/welcome.component';

import { ButtonComponent } from './components/game/ui/button/button.component';
import { MatchComponent } from './components/game/match/match.component';
import { ConfigComponent } from './components/game/config/config.component';
import { InputComponent } from './components/game/ui/input/input.component';
import { HttpModule } from '@angular/http';
import { SelectComponent } from './components/game/ui/select/select.component';
import { ScoreTableComponent } from './components/game/score-table/score-table.component';
import { MatchSummaryComponent } from './components/game/match-summary/match-summary.component';
import { GameSummaryComponent } from './components/game/game-summary/game-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WelcomeComponent,
    ButtonComponent,
    ConfigComponent,
    InputComponent,
    MatchComponent,
    SelectComponent,
    ScoreTableComponent,
    MatchSummaryComponent,
    GameSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
