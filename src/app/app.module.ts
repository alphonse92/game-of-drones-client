import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { WelcomeComponent } from './components/game/welcome/welcome.component';

import { ButtonComponent } from './components/game/ui/button/button.component';
import { RoundComponent } from './components/game/match/round/round.component';
import { MatchComponent } from './components/game/match/match.component';
import { ConfigComponent } from './components/game/config/config.component';
import { InputComponent } from './components/game/ui/input/input.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WelcomeComponent,
    ButtonComponent,
    RoundComponent,
    ConfigComponent,
    InputComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
