import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { WelcomeComponent } from './components/game/welcome/welcome.component';

import { ButtonComponent } from './components/game/ui/button/button.component';
import { RoundComponent } from './components/game/round/round.component';
import { ConfigComponent } from './components/game/config/config.component';
import { InputComponent } from './components/game/ui/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WelcomeComponent,
    ButtonComponent,
    RoundComponent,
    ConfigComponent,
    InputComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
