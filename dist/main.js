(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- <app-game></app-game> -->"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_game_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game/welcome/welcome.component */ "./src/app/components/game/welcome/welcome.component.ts");
/* harmony import */ var _components_game_ui_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game/ui/button/button.component */ "./src/app/components/game/ui/button/button.component.ts");
/* harmony import */ var _components_game_match_match_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game/match/match.component */ "./src/app/components/game/match/match.component.ts");
/* harmony import */ var _components_game_config_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game/config/config.component */ "./src/app/components/game/config/config.component.ts");
/* harmony import */ var _components_game_ui_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game/ui/input/input.component */ "./src/app/components/game/ui/input/input.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_game_ui_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/game/ui/select/select.component */ "./src/app/components/game/ui/select/select.component.ts");
/* harmony import */ var _components_game_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/game/score-table/score-table.component */ "./src/app/components/game/score-table/score-table.component.ts");
/* harmony import */ var _components_game_match_summary_match_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/game/match-summary/match-summary.component */ "./src/app/components/game/match-summary/match-summary.component.ts");
/* harmony import */ var _components_game_game_summary_game_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/game/game-summary/game-summary.component */ "./src/app/components/game/game-summary/game-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
                _components_game_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _components_game_ui_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _components_game_config_config_component__WEBPACK_IMPORTED_MODULE_9__["ConfigComponent"],
                _components_game_ui_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
                _components_game_match_match_component__WEBPACK_IMPORTED_MODULE_8__["MatchComponent"],
                _components_game_ui_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"],
                _components_game_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_13__["ScoreTableComponent"],
                _components_game_match_summary_match_summary_component__WEBPACK_IMPORTED_MODULE_14__["MatchSummaryComponent"],
                _components_game_game_summary_game_summary_component__WEBPACK_IMPORTED_MODULE_15__["GameSummaryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/config/config.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/game/config/config.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">Enter Player's Names</h1>\n<div class=\"inputs\">\n    <div class=\"input center\" *ngFor=\"let player of players; let i = index\">\n        <label>{{player.label}}</label>\n        <app-input [(value)]=\"player.name\"></app-input>\n    </div>\n\n    <div class=\"input center\">\n        <small class=\"error\" *ngIf=\"error\">{{error}}</small>\n    </div>\n    <div class=\"input center\">\n        <app-button (clicked)=\"start_game()\" [label]=\"button_label\"></app-button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/game/config/config.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/components/game/config/config.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n.inputs {\n  display: flex;\n  flex-direction: column; }\n\n.inputs .input {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 25px; }\n\n.inputs .input .error {\n      color: white;\n      padding: 7px 11px;\n      background: black; }\n\n.inputs .input label {\n      margin-right: 53px;\n      -ms-grid-row-align: center;\n          align-self: center; }\n"

/***/ }),

/***/ "./src/app/components/game/config/config.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/game/config/config.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var src_app_services_player_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/player/player.service */ "./src/app/services/player/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(PlayerService) {
        this.PlayerService = PlayerService;
        this.players = [];
        this.error = "";
        this.button_label = "Start Playing";
        this.configured = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        for (var i = 1; i <= src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].total_players; i++) {
            this.players.push({ label: "Player " + i, name: "" });
        }
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.start_game = function () {
        if (this.validePlayerNames()) {
            this.error = "";
            return this.configured.emit(this.getPlayerInstanceObjects());
        }
        this.error = "The player name must be a alpha-numeric string without special characters";
    };
    ConfigComponent.prototype.getPlayerInstanceObjects = function () {
        var playerNames = this.players.map(function (player) { return player.name; });
        return this.PlayerService
            .getByName(playerNames)
            .then(function (Players) {
            var playerThatExist = Players.map(function (p) { return p.getName(); });
            var missingPlayersInstances = playerNames.reduce(function (array, name) {
                if (!playerThatExist.includes(name))
                    array.push(new src_app_models_player_model__WEBPACK_IMPORTED_MODULE_2__["PlayerBuilder"]().withName(name).build());
                return array;
            }, []);
            Players = Players.concat(missingPlayersInstances);
            return Players;
        });
    };
    ConfigComponent.prototype.validePlayerNames = function () {
        var self = this;
        var current_names = {};
        return this.players.reduce(function (out, player) {
            out = out && self.valideName(player.name) && !current_names[player.name];
            current_names[player.name] = true;
            return out;
        }, true);
    };
    ConfigComponent.prototype.valideName = function (name) {
        return /^[A-Za-z0-9]+$/.test(name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfigComponent.prototype, "configured", void 0);
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/components/game/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.sass */ "./src/app/components/game/config/config.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_player_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game-summary/game-summary.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/game/game-summary/game-summary.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <h1><small><a [routerLink]=\"['/']\"> back</a></small> Top Scores </h1>\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Wins</th>\r\n                <th>Matches Played</th>\r\n                <th>Flawless Victories</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let player of players; let i = index\">\r\n                <td>{{player.name}}</td>\r\n                <td>{{player.wins}}</td>\r\n                <td>{{player.played}}</td>\r\n                <td>{{player.emperor}}</td>\r\n            </tr>\r\n           \r\n        </tbody>\r\n    </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/game/game-summary/game-summary.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/game/game-summary/game-summary.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 small {\n  font-size: 17px; }\n\nh1, td, th {\n  text-align: center; }\n\nth {\n  font-size: 20px; }\n\ntd, th {\n  padding: 7px 17px; }\n\n.content {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/game/game-summary/game-summary.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/game/game-summary/game-summary.component.ts ***!
  \************************************************************************/
/*! exports provided: GameSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSummaryComponent", function() { return GameSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_match_match_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/match/match.service */ "./src/app/services/match/match.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameSummaryComponent = /** @class */ (function () {
    function GameSummaryComponent(MatchService) {
        this.MatchService = MatchService;
        this.players = [];
    }
    GameSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MatchService.getSummary()
            .then(function (PlayersSummary) {
            console.log(PlayersSummary);
            _this.players = PlayersSummary.slice(0, 10);
        });
    };
    GameSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-summary',
            template: __webpack_require__(/*! ./game-summary.component.html */ "./src/app/components/game/game-summary/game-summary.component.html"),
            styles: [__webpack_require__(/*! ./game-summary.component.sass */ "./src/app/components/game/game-summary/game-summary.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_match_match_service__WEBPACK_IMPORTED_MODULE_1__["MatchService"]])
    ], GameSummaryComponent);
    return GameSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-welcome \r\n    class=\"game-window\" \r\n    [ngClass]=\"{\r\n        active:current_window.name === windows.welcome.name,\r\n        hidden:current_window.name !== windows.welcome.name}\"\r\n    (start)=\"next()\">\r\n</app-welcome>\r\n<app-config \r\n    class=\"game-window\" \r\n    [ngClass]=\"{\r\n        active:current_window.name === windows.config.name,\r\n        hidden:current_window.name !== windows.config.name}\"\r\n    (configured)=\"onConfigured($event)\">\r\n</app-config>\r\n<app-match \r\n    #MatchComponent\r\n    class=\"game-window\" \r\n    [match]=\"current_match\"\r\n    (onFinish)=\"onFinishMatch($event)\" \r\n    [ngClass]=\"{\r\n        active:current_window.name === windows.match.name,\r\n        hidden:current_window.name !== windows.match.name}\">\r\n</app-match>\r\n<app-match-summary\r\n    #SummaryComponent\r\n    class=\"game-window\" \r\n    [summary]=\"summary\"\r\n    (onClose)=\"finishGame()\" \r\n    [ngClass]=\"{\r\n        active:current_window.name === windows.summary.name,\r\n        hidden:current_window.name !== windows.summary.name}\">\r\n</app-match-summary>"

/***/ }),

/***/ "./src/app/components/game/game.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-window {\n  overflow: hidden;\n  align-self: center;\n  height: 700px;\n  width: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: width 300ms, opacity 100ms; }\n  .game-window.active {\n    width: 700px; }\n  .game-window.hidden {\n    opacity: 0 !important; }\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/localstorage/localstorage.service */ "./src/app/services/localstorage/localstorage.service.ts");
/* harmony import */ var _services_match_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/match/match.service */ "./src/app/services/match/match.service.ts");
/* harmony import */ var _models_match_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/match.model */ "./src/app/models/match.model.ts");
/* harmony import */ var _match_match_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./match/match.component */ "./src/app/components/game/match/match.component.ts");
/* harmony import */ var _match_summary_match_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-summary/match-summary.component */ "./src/app/components/game/match-summary/match-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameComponent = /** @class */ (function () {
    function GameComponent(LocalstorageService, MatchService) {
        this.LocalstorageService = LocalstorageService;
        this.MatchService = MatchService;
        this.windows = {
            welcome: {
                name: "welcome",
                next: "config",
            },
            config: {
                name: "config",
                next: "match",
            },
            match: {
                name: "match",
                next: "summary"
            },
            summary: {
                name: "summary",
                next: "welcome"
            },
        };
        this.current_window_default = this.windows.welcome;
        this.current_window = this.current_window_default;
        this.last_window = null;
        this.current_match = null;
        this.summary = null;
    }
    GameComponent.prototype.ngOnInit = function () {
        var current_window = this.LocalstorageService.get("current_window");
        var current_match = this.LocalstorageService.get("match");
        var summary = this.LocalstorageService.get("summary");
        if (current_match && current_window.name === this.windows.match.name)
            this.initMatchWindow(current_match);
        else if (summary && current_window.name === this.windows.summary.name)
            this.initSummaryWindow(summary);
        else
            this.initWelcome();
    };
    GameComponent.prototype.initWelcome = function () {
        this.current_window = this.current_window_default;
        this.LocalstorageService.reset();
    };
    GameComponent.prototype.initMatchWindow = function (m) {
        var current_match = m;
        var match = new _models_match_model__WEBPACK_IMPORTED_MODULE_3__["Match"](this.MatchService, current_match.Players, current_match.n_rounds);
        match.setRound(current_match.current_round);
        this.current_window = this.windows.match;
        this.current_match = match;
    };
    GameComponent.prototype.initSummaryWindow = function (summary) {
        this.summary = summary;
        this.current_window = this.windows.summary;
    };
    GameComponent.prototype.onConfigured = function (PlayersDataPromise) {
        var self = this;
        PlayersDataPromise
            .then(function (Players) {
            self.current_match = new _models_match_model__WEBPACK_IMPORTED_MODULE_3__["Match"](self.MatchService, Players, 3);
            self.saveMatchData(self.current_match.toJson());
            self.summary = null;
            self.next();
        });
        this.MatchComponent.reset();
    };
    GameComponent.prototype.onFinishMatch = function (summary) {
        this.saveMatchData(null); //clear last match data
        this.saveSummary(summary); // store the summary results
        this.summary = summary;
        this.MatchSummaryComponent.setSummary(this.summary);
        this.next();
    };
    GameComponent.prototype.saveMatchData = function (data) {
        this.LocalstorageService.set("match", data);
    };
    GameComponent.prototype.saveSummary = function (data) {
        this.LocalstorageService.set("summary", data);
    };
    GameComponent.prototype.finishGame = function () {
        this.LocalstorageService.reset();
        this.next();
    };
    GameComponent.prototype.next = function () {
        this.last_window = this.current_window;
        this.current_window = this.windows[this.current_window.next];
        this.LocalstorageService.set("current_window", this.current_window);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatchComponent'),
        __metadata("design:type", _match_match_component__WEBPACK_IMPORTED_MODULE_4__["MatchComponent"])
    ], GameComponent.prototype, "MatchComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SummaryComponent'),
        __metadata("design:type", _match_summary_match_summary_component__WEBPACK_IMPORTED_MODULE_5__["MatchSummaryComponent"])
    ], GameComponent.prototype, "MatchSummaryComponent", void 0);
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.sass */ "./src/app/components/game/game.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"],
            _services_match_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/game/match-summary/match-summary.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/game/match-summary/match-summary.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"emperor\" [ngClass]=\"{show: summary?.result.emperor && show_emperor}\">\n    <h1>¡ We have a Winner !!</h1>\n    <h2>{{summary?.result.winner.name}} Is The New EMPEROR!</h2>\n    <app-button (clicked)=\"closeEmperorView()\" [label]=\"emperor_btn_lbl\"></app-button>\n  </div>\n  <div class=\"table_container\" [ngClass]=\"{show:!show_emperor}\">\n    <app-score-table [winners]=\"summary?.winners\"></app-score-table>\n    <app-button (clicked)=\"close()\" [label]=\"play_btn_lbl\"></app-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/game/match-summary/match-summary.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/game/match-summary/match-summary.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container app-button {\n  display: flex;\n  justify-content: center; }\n\n.container .emperor h1, .container .emperor h2 {\n  text-align: center; }\n\n.container .emperor h1 {\n  font-size: 45px; }\n\n.container .emperor h1 {\n  font-size: 35px; }\n\n.container .emperor, .container .table_container {\n  transition: 300ms;\n  display: none;\n  flex-direction: column; }\n\n.container .emperor.show, .container .table_container.show {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/components/game/match-summary/match-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/game/match-summary/match-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: MatchSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchSummaryComponent", function() { return MatchSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchSummaryComponent = /** @class */ (function () {
    function MatchSummaryComponent() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show_emperor = false;
        this.emperor_btn_lbl = "Continue";
        this.play_btn_lbl = "Play Again";
    }
    MatchSummaryComponent.prototype.ngOnInit = function () {
        console.log("init summary window", this.summary);
        if (this.summary)
            this.show_emperor = this.summary.result.emperor;
    };
    MatchSummaryComponent.prototype.closeEmperorView = function () {
        this.show_emperor = false;
    };
    MatchSummaryComponent.prototype.close = function () {
        this.onClose.emit();
        this.summary = null;
    };
    MatchSummaryComponent.prototype.setSummary = function (summary) {
        this.summary = summary;
        this.show_emperor = this.summary.result.emperor;
        console.log(this.summary);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MatchSummaryComponent.prototype, "summary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MatchSummaryComponent.prototype, "onClose", void 0);
    MatchSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-match-summary',
            template: __webpack_require__(/*! ./match-summary.component.html */ "./src/app/components/game/match-summary/match-summary.component.html"),
            styles: [__webpack_require__(/*! ./match-summary.component.sass */ "./src/app/components/game/match-summary/match-summary.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MatchSummaryComponent);
    return MatchSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/game/match/match.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/game/match/match.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"match\">\n  <div class=\"round\">\n    <h1>Round {{match?.current_round + 1 }}</h1>\n    <h2>{{match.Players[match.current_player].name}} Move</h2>\n    <div class=\"input-row\">\n      <app-select #select [label]=\"label_select\" [options]=\"options\" (onChange)=\"onMoveSelected($event)\"></app-select>\n    </div>\n    <div class=\"input-row center\">\n      <app-button (clicked)=\"move()\" [label]=\"button_label\"></app-button>\n    </div>\n\n  </div>\n  <app-score-table [winners]=\"winners\"></app-score-table>\n</div>"

/***/ }),

/***/ "./src/app/components/game/match/match.component.sass":
/*!************************************************************!*\
  !*** ./src/app/components/game/match/match.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row; }\n  .container .round {\n    width: 50%; }\n  .container .round .input-row.center {\n      display: flex;\n      flex-direction: row;\n      justify-content: center; }\n  .container app-score-table {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/game/match/match.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/game/match/match.component.ts ***!
  \**********************************************************/
/*! exports provided: MatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchComponent", function() { return MatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_match_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/match.model */ "./src/app/models/match.model.ts");
/* harmony import */ var _ui_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/select/select.component */ "./src/app/components/game/ui/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchComponent = /** @class */ (function () {
    function MatchComponent() {
        this.onFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.label_select = "Select Move";
        this.button_label = "Ok";
        this.selected_move = null;
        this.is_finish = false;
        this.winners = [];
        this.winners_map = {};
        this.options = ["Rock", "Paper", "Scissors"];
    }
    MatchComponent.prototype.ngOnInit = function () {
        if (this.match)
            this.current_round = this.match.getCurrentRoundInstance();
        this.reset();
    };
    MatchComponent.prototype.reset = function () {
        this.winners = [];
    };
    MatchComponent.prototype.onMoveSelected = function (value) {
        this.selected_move = value;
    };
    MatchComponent.prototype.move = function () {
        var _this = this;
        if (!this.selected_move)
            return console.error("No se ha seleccionado ningún movimiento");
        var self = this;
        this.match
            .move(this.selected_move)
            .then(function (current_data) {
            self.current_round = current_data.current_round;
            self.current_player = current_data.current_player;
            var winner = current_data.winner;
            if (current_data.tie) {
            }
            else if (current_data.finish) {
                self.addResult(winner);
                _this.onFinish.emit({ result: current_data.result, winners: self.winners });
            }
            else if (current_data.winner) {
                self.addResult(winner);
            }
            else { }
            _this.selected_move = self.SelectComponent.reset();
            _this.is_finish = current_data.finish;
        });
    };
    MatchComponent.prototype.addResult = function (winner) {
        if (winner) {
            this.winners.push({
                round: this.match.getCurrentRound(),
                name: winner.name
            });
            this.winners_map[winner.name] = winner;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("match"),
        __metadata("design:type", _models_match_model__WEBPACK_IMPORTED_MODULE_1__["Match"])
    ], MatchComponent.prototype, "match", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MatchComponent.prototype, "onFinish", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('select'),
        __metadata("design:type", _ui_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"])
    ], MatchComponent.prototype, "SelectComponent", void 0);
    MatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-match',
            template: __webpack_require__(/*! ./match.component.html */ "./src/app/components/game/match/match.component.html"),
            styles: [__webpack_require__(/*! ./match.component.sass */ "./src/app/components/game/match/match.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MatchComponent);
    return MatchComponent;
}());



/***/ }),

/***/ "./src/app/components/game/score-table/score-table.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/game/score-table/score-table.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tablescore\">\n  <div class=\"container\">\n    <h1>Score</h1>\n    <table>\n      <thead>\n        <tr>\n          <th>Round</th>\n          <th>Winner</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let winner of winners\">\n          <td>{{winner.round}}</td>\n          <td>{{winner.name}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <app-button *ngIf=\"is_finish\" (clicked)=\"move()\" [label]=\"button_label\"></app-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/game/score-table/score-table.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/components/game/score-table/score-table.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablescore {\n  width: 100%; }\n  .tablescore .container {\n    display: flex;\n    flex-direction: column; }\n  .tablescore .container h1 {\n      text-align: center; }\n  .tablescore .container app-button {\n      display: flex;\n      justify-content: center; }\n  .tablescore .container table thead tr th {\n      font-size: 1.5em; }\n  .tablescore .container table tbody tr td {\n      text-align: center;\n      font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/components/game/score-table/score-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/game/score-table/score-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScoreTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreTableComponent", function() { return ScoreTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScoreTableComponent = /** @class */ (function () {
    function ScoreTableComponent() {
        this.winners = [];
    }
    ScoreTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScoreTableComponent.prototype, "winners", void 0);
    ScoreTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score-table',
            template: __webpack_require__(/*! ./score-table.component.html */ "./src/app/components/game/score-table/score-table.component.html"),
            styles: [__webpack_require__(/*! ./score-table.component.sass */ "./src/app/components/game/score-table/score-table.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ScoreTableComponent);
    return ScoreTableComponent;
}());



/***/ }),

/***/ "./src/app/components/game/ui/button/button.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/game/ui/button/button.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick($event)\">{{label}}</button>"

/***/ }),

/***/ "./src/app/components/game/ui/button/button.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/components/game/ui/button/button.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 23px 51px;\n  border: none;\n  font-size: 18px;\n  font-family: \"Patrick Hand\", cursive !important;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3C!-- Creator%3A CorelDRAW X7 --%3E%0D%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xml%3Aspace%3D%22preserve%22 width%3D%22669px%22 height%3D%22226px%22 version%3D%221.1%22 style%3D%22shape-rendering%3AgeometricPrecision%3B text-rendering%3AgeometricPrecision%3B image-rendering%3AoptimizeQuality%3B fill-rule%3Aevenodd%3B clip-rule%3Aevenodd%22%0DviewBox%3D%220 0 665 225%22%0D xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D %3Cdefs%3E%0D  %3Cstyle type%3D%22text%2Fcss%22%3E%0D   %3C!%5BCDATA%5B%0D    .str0 %7Bstroke%3Ablack%3Bstroke-width%3A0.750552%7D%0D    .fil0 %7Bfill%3Ablack%7D%0D    .fil1 %7Bfill%3Awhite%7D%0D   %5D%5D%3E%0D  %3C%2Fstyle%3E%0D %3C%2Fdefs%3E%0D %3Cg id%3D%22Capa_x0020_1%22%3E%0D  %3Cmetadata id%3D%22CorelCorpID_0Corel-Layer%22%2F%3E%0D  %3Cg id%3D%22_414918528%22%3E%0D   %3Cpath class%3D%22fil0 str0%22 d%3D%22M5 0l659 0 -1 119c2%2C34 -3%2C71 0%2C105 -308%2C-11 -441%2C-6 -663%2C-11l5 -213z%22%2F%3E%0D   %3Cpath class%3D%22fil1%22 d%3D%22M9 5c279%2C6 434%2C1 649%2C0 0%2C25 2%2C43 2%2C68 0%2C44 -2%2C83 -2%2C128l-649 6c0%2C-69 0%2C-133 0%2C-202z%22%2F%3E%0D  %3C%2Fg%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  background-size: 100%;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat; }\n  button:active {\n    margin-top: 5px; }\n  button:hover {\n    cursor: pointer; }\n  button:focus {\n    outline: none !important; }\n"

/***/ }),

/***/ "./src/app/components/game/ui/button/button.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game/ui/button/button.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.emiting = 0;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.onClick = function ($event) {
        this.clicked.emit($event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonComponent.prototype, "clicked", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/game/ui/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.sass */ "./src/app/components/game/ui/button/button.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/game/ui/input/input.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/game/ui/input/input.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input\">\n  <input [ngModel]=\"value\" (change)=\"onChange($event)\" type=\"text\" />\n</div>"

/***/ }),

/***/ "./src/app/components/game/ui/input/input.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/game/ui/input/input.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input input {\n  padding: 16px 24px;\n  border: none;\n  font-size: 18px;\n  font-family: \"Patrick Hand\", cursive !important;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3C!-- Creator%3A CorelDRAW X7 --%3E%0D%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xml%3Aspace%3D%22preserve%22 width%3D%22901px%22 height%3D%22245px%22 version%3D%221.1%22 style%3D%22shape-rendering%3AgeometricPrecision%3B text-rendering%3AgeometricPrecision%3B image-rendering%3AoptimizeQuality%3B fill-rule%3Aevenodd%3B clip-rule%3Aevenodd%22%0DviewBox%3D%220 0 927 252%22%0D xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D %3Cdefs%3E%0D  %3Cstyle type%3D%22text%2Fcss%22%3E%0D   %3C!%5BCDATA%5B%0D    .str0 %7Bstroke%3Ablack%3Bstroke-width%3A0.777122%7D%0D    .fil0 %7Bfill%3Ablack%7D%0D    .fil1 %7Bfill%3Awhite%7D%0D   %5D%5D%3E%0D  %3C%2Fstyle%3E%0D %3C%2Fdefs%3E%0D %3Cg id%3D%22Capa_x0020_1%22%3E%0D  %3Cmetadata id%3D%22CorelCorpID_0Corel-Layer%22%2F%3E%0D  %3Cg id%3D%22_416661480%22%3E%0D   %3Cpath class%3D%22fil0 str0%22 d%3D%22M33 0c286%2C4 573%2C19 858%2C12 18%2C0 33%2C15 33%2C33l2 178c0%2C18 -12%2C19 -30%2C19l-863 9c-18%2C0 -33%2C-15 -33%2C-33l0 -185c0%2C-18 15%2C-33 33%2C-33z%22%2F%3E%0D   %3Cpath class%3D%22fil1 str0%22 d%3D%22M42 12c280%2C4 561%2C17 841%2C11 17%2C0 32%2C14 32%2C30l2 161c0%2C16 -12%2C17 -29%2C17l-846 8c-18%2C1 -32%2C-13 -32%2C-29l0 -168c0%2C-16 14%2C-30 32%2C-30z%22%2F%3E%0D  %3C%2Fg%3E%0D %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  background-size: contain;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat; }\n  .input input:focus {\n    outline: none !important; }\n"

/***/ }),

/***/ "./src/app/components/game/ui/input/input.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game/ui/input/input.component.ts ***!
  \*************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.onChange = function (val) {
        val = val.target.value;
        console.log(val);
        this.valueChange.emit(val);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "valueChange", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/components/game/ui/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.sass */ "./src/app/components/game/ui/input/input.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/game/ui/select/select.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/game/ui/select/select.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <label>{{label}}</label>\n  <div class=\"input\">\n    <div class=\"select\">\n      <div class=\"control\" (click)=\"openOrCLose()\">\n        <div class=\"text\">\n          <p>{{selected}}</p>\n          <img src=\"assets/select-input.svg\">\n        </div>\n        <div class=\"arrow\">\n            <img src=\"assets/select-arrow.svg\">\n        </div>\n      </div>\n    </div>\n    <div class=\"list\" [ngClass]=\"{closed:!isOpen}\">\n      <ul>\n        <li *ngFor=\"let option of options; let i = index\" (click)=\"select(option)\">{{option}}</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/game/ui/select/select.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/components/game/ui/select/select.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row; }\n  .container label {\n    font-size: 18px;\n    margin-right: 13px; }\n  .container .input {\n    display: flex;\n    flex-direction: column;\n    position: relative; }\n  .container .input .list {\n      position: absolute;\n      width: 100%;\n      top: 30px; }\n  .container .input .list.closed {\n        max-height: 0px;\n        overflow: hidden;\n        border: none; }\n  .container .input .list ul {\n        padding: 0px;\n        margin: 0px;\n        max-height: 250px;\n        border: 1px solid black;\n        background: white;\n        transition: 600ms;\n        list-style: none; }\n  .container .input .list ul li {\n          transition: 0.3s;\n          padding: 7px 11px;\n          font-size: 18px; }\n  .container .input .list ul li:hover {\n            cursor: pointer;\n            background: black;\n            color: white; }\n  .container .input .select {\n      display: flex;\n      flex-direction: row;\n      justify-items: left; }\n  .container .input .select .control {\n        display: flex;\n        flex-direction: row; }\n  .container .input .select .control .text {\n          border: 2px solid black;\n          position: relative;\n          display: flex;\n          padding: 0px;\n          justify-self: left;\n          height: 30px;\n          width: 200px; }\n  .container .input .select .control .text:hover {\n            cursor: pointer; }\n  .container .input .select .control .text:focus {\n            outline: none !important; }\n  .container .input .select .control .text img {\n            -o-object-fit: cover;\n               object-fit: cover;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            padding: 0;\n            margin: 0; }\n  .container .input .select .control .text p {\n            padding: 0px 32px;\n            margin: 0px;\n            font-size: 24px;\n            text-align: center;\n            -ms-grid-row-align: center;\n                align-self: center;\n            z-index: 999; }\n  .container .input .select .control .arrow:hover {\n          cursor: pointer; }\n  .container .input .select .control .arrow img {\n          width: 30px;\n          height: 30px; }\n"

/***/ }),

/***/ "./src/app/components/game/ui/select/select.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game/ui/select/select.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.value = "";
        this.label = "";
        this.options = [];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
        this.option_default = "";
        this.selected = "";
        this.arrow = "select-arrow.svg";
        this.input = "select-input.svg";
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.option_default = this.options[0] || "";
        this.selected = this.option_default;
        this.onChange.emit(this.selected);
    };
    SelectComponent.prototype.openOrCLose = function () {
        this.isOpen = !this.isOpen;
        this.onChange.emit(this.selected);
    };
    SelectComponent.prototype.open = function () {
        this.isOpen = true;
    };
    SelectComponent.prototype.close = function () {
        this.isOpen = false;
    };
    SelectComponent.prototype.select = function (option) {
        this.selected = option;
        this.close();
        this.onChange.emit(option);
    };
    SelectComponent.prototype.getCurrent = function () {
        return this.selected;
    };
    SelectComponent.prototype.reset = function () {
        this.selected = this.option_default;
        return this.selected;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectComponent.prototype, "onChange", void 0);
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/components/game/ui/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.sass */ "./src/app/components/game/ui/select/select.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/components/game/welcome/welcome.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/game/welcome/welcome.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>¡ Welcome to Game Of Drones !</h1>\n<app-button (clicked)=\"start_game()\" [label]=\"button_label\"></app-button>\n<a [routerLink]=\"['/summary']\">Top Scores</a>\n<small>Developed by Alejandro Molina </small>"

/***/ }),

/***/ "./src/app/components/game/welcome/welcome.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/components/game/welcome/welcome.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  -ms-grid-row-align: center;\n      align-self: center; }\n"

/***/ }),

/***/ "./src/app/components/game/welcome/welcome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/game/welcome/welcome.component.ts ***!
  \**************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.button_label = "Start Playing";
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.start_game = function () {
        console.log("asdasd");
        this.start.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WelcomeComponent.prototype, "start", void 0);
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/game/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.sass */ "./src/app/components/game/welcome/welcome.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/models/match.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/match.model.ts ***!
  \***************************************/
/*! exports provided: Match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony import */ var _round_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round.model */ "./src/app/models/round.model.ts");

var Match = /** @class */ (function () {
    function Match(MatchService, Players, n_rounds) {
        this.MatchService = MatchService;
        this.Players = Players;
        this.n_rounds = n_rounds;
        this.winner = null;
        this.rounds = [];
        this.current_round = 0;
        this.current_player = 0;
        this.is_finish = false;
        for (var i = 0; i < this.n_rounds; i++) {
            this.rounds.push(new _round_model__WEBPACK_IMPORTED_MODULE_0__["Round"](MatchService, this.Players));
        }
    }
    /**
     * Setters, getters
     */
    Match.prototype.setRound = function (round) {
        this.current_round = round;
    };
    Match.prototype.setRounds = function (rounds) {
        this.rounds = rounds;
    };
    Match.prototype.getRounds = function () {
        return this.rounds;
    };
    Match.prototype.addRound = function (round) {
        this.rounds.push(round);
    };
    Match.prototype.getCurrentRound = function () {
        var offset = this.is_finish ? 1 : 0;
        return offset + this.current_round;
    };
    Match.prototype.getCurrentRoundInstance = function () {
        return this.rounds[this.current_round];
    };
    Match.prototype.getCurrentPlayerInstance = function () {
        return this.getCurrentRoundInstance().getPlayer(this.current_player);
    };
    /**
     * about the game
     */
    Match.prototype.move = function (move) {
        this.rounds[this.current_round].addMove(this.current_player, move);
        if (this.areAllPlayersMovedInCurrentRound()) {
            if (!this.getCurrentRoundInstance().isATie()) {
                return this.tryGoToNextRound();
            }
            return this.resolveTie();
        }
        return this.nextPlayer();
    };
    Match.prototype.nextPlayer = function () {
        this.current_player++;
        return this.getStatusMatch();
    };
    Match.prototype.resolveTie = function () {
        this.getCurrentRoundInstance().resetMoves();
        this.current_player = 0;
        return this.getStatusMatch(false, true);
    };
    Match.prototype.tryGoToNextRound = function () {
        var isMatchFinished = this.valideMatchFinished();
        var winner = this.getCurrentRoundInstance().getWinner();
        if (isMatchFinished) {
            return this.finishMatch(winner);
        }
        return this.nextRound(winner);
    };
    Match.prototype.nextRound = function (winner) {
        this.current_player = 0;
        this.current_round++;
        return this.getStatusMatch(false, false, winner);
    };
    Match.prototype.finishMatch = function (winner) {
        this.is_finish = true;
        this.winner = winner;
        return this.getStatusMatch(true, false, winner)
            .then(this.saveMatch.bind(this));
    };
    Match.prototype.saveMatch = function (data) {
        return this.MatchService.saveMatch(this.toJson())
            .then(function (result) {
            data.result = result;
            return data;
        });
    };
    Match.prototype.getStatusMatch = function (finish, tie, winner) {
        if (finish === void 0) { finish = false; }
        if (tie === void 0) { tie = false; }
        if (winner === void 0) { winner = null; }
        return Promise.resolve({
            finish: finish,
            tie: tie,
            winner: winner,
            current_player: this.getCurrentPlayerInstance().player,
            current_round: this.getCurrentRoundInstance(),
            result: null
        });
    };
    Match.prototype.isLastRound = function () {
        return this.current_round === this.rounds.length - 1;
    };
    Match.prototype.areAllPlayersMovedInCurrentRound = function () {
        return this.rounds[this.current_round].areAllPlayersMove();
    };
    Match.prototype.valideMatchFinished = function () {
        return this.isLastRound() && this.areAllPlayersMovedInCurrentRound();
    };
    Match.prototype.getWinner = function () {
        var self = this;
        return null;
    };
    Match.prototype.toJson = function () {
        return {
            Players: this.Players,
            n_rounds: this.n_rounds,
            current_round: this.current_round,
            current_player: this.current_player,
            winner: this.winner,
            rounds: this.rounds.map(function (r) {
                return r.toJson();
            })
        };
    };
    return Match;
}());



/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: Player, PlayerBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerBuilder", function() { return PlayerBuilder; });
var Player = /** @class */ (function () {
    function Player() {
        this.games_played = 0;
        this.games_won = 0;
    }
    Player.prototype.getName = function () { return this.name; };
    Player.prototype.setName = function (name) { this.name = name; };
    Player.prototype.getGamesWon = function () { return this.games_played; };
    Player.prototype.setGamesWon = function (value) { this.games_won = value; };
    Player.prototype.getGamesPlayed = function () { return this.games_won; };
    Player.prototype.setGamesPlayed = function (value) { this.games_played = value; };
    Player.getMock = function (name) {
        var player = null;
    };
    return Player;
}());

var PlayerBuilder = /** @class */ (function () {
    function PlayerBuilder() {
        this.instance = null;
        this.instance = new Player();
    }
    PlayerBuilder.prototype.withName = function (name) {
        this.instance.setName(name);
        return this;
    };
    PlayerBuilder.prototype.withGamesPlayed = function (val) {
        this.instance.setGamesPlayed(val);
        return this;
    };
    PlayerBuilder.prototype.withGamesWon = function (val) {
        this.instance.setGamesWon(val);
        return this;
    };
    PlayerBuilder.prototype.build = function () {
        return this.instance;
    };
    return PlayerBuilder;
}());



/***/ }),

/***/ "./src/app/models/round.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/round.model.ts ***!
  \***************************************/
/*! exports provided: Round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Round", function() { return Round; });
var Round = /** @class */ (function () {
    function Round(MatchService, Players) {
        var _this = this;
        this.MatchService = MatchService;
        this.roundPlayers = [];
        this.roundPlayersMap = {};
        this.moveDefault = "";
        this.rules = {
            "Rock": "Scissors",
            "Scissors": "Paper",
            "Paper": "Rock"
        };
        this.roundPlayers = Players.map(function (player) {
            return { player: player, move: _this.moveDefault };
        });
    }
    Round.prototype.addPlayer = function (player) {
        this.roundPlayers.push({ player: player, move: null });
        this.roundPlayersMap[player.getName()] = this.roundPlayers.length - 1;
    };
    Round.prototype.addMove = function (player, move) {
        this.roundPlayers[player].move = move;
    };
    Round.prototype.getPlayers = function () {
        return this.roundPlayers;
    };
    Round.prototype.getPlayer = function (player) {
        return this.roundPlayers[player];
    };
    Round.prototype.getWinner = function () {
        if (this.isATie()) {
            return null;
        }
        ;
        var roundPlayer1 = this.getPlayer(0);
        var roundPlayer2 = this.getPlayer(1);
        return this.validePlayerBeatTo(roundPlayer1, roundPlayer2) ?
            roundPlayer1.player :
            roundPlayer2.player;
    };
    Round.prototype.validePlayerBeatTo = function (roundPlayer1, roundPlayer2) {
        return this.rules[roundPlayer1.move] === roundPlayer2.move;
    };
    Round.prototype.resetMoves = function () {
        var _this = this;
        this.roundPlayers = this.roundPlayers.map(function (rp) {
            rp.move = _this.moveDefault;
            return rp;
        });
    };
    Round.prototype.isATie = function () {
        return this.getPlayer(0).move === this.getPlayer(1).move;
    };
    Round.prototype.areAllPlayersMove = function () {
        return this.roundPlayers.reduce(function (out, playerRound) {
            out = out && !!playerRound.move;
            return out;
        }, true);
    };
    Round.prototype.toJson = function () {
        return {
            round_players: this.roundPlayers
        };
    };
    return Round;
}());



/***/ }),

/***/ "./src/app/routing/Routes.ts":
/*!***********************************!*\
  !*** ./src/app/routing/Routes.ts ***!
  \***********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var src_app_components_game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var src_app_components_game_game_summary_game_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/game/game-summary/game-summary.component */ "./src/app/components/game/game-summary/game-summary.component.ts");


var AppRoutes = [
    { path: '', component: src_app_components_game_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"] },
    { path: 'summary', component: src_app_components_game_game_summary_game_summary_component__WEBPACK_IMPORTED_MODULE_1__["GameSummaryComponent"] },
];



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/app/routing/Routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_Routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"])],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/localstorage/factories/localstorage/LocalStorage.ts":
/*!******************************************************************************!*\
  !*** ./src/app/services/localstorage/factories/localstorage/LocalStorage.ts ***!
  \******************************************************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.set = function (key, value) {
        return localStorage.setItem(key, value);
    };
    LocalStorage.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorage.prototype.reset = function () {
        localStorage.clear();
    };
    return LocalStorage;
}());



/***/ }),

/***/ "./src/app/services/localstorage/factories/localstorage/Storages.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/localstorage/factories/localstorage/Storages.ts ***!
  \**************************************************************************/
/*! exports provided: LocalStorageFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageFactory", function() { return LocalStorageFactory; });
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./src/app/services/localstorage/factories/localstorage/LocalStorage.ts");

//your custom local storage
//import { LocalStorageImpl } from "./LocalStorage";
var LocalStorageFactory = /** @class */ (function () {
    function LocalStorageFactory() {
        throw ("LocalStorageFactory doenst implement a constructor");
    }
    LocalStorageFactory.get = function (type) {
        if (type === LocalStorageFactory.TYPE_DEFAULT)
            return new _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"]();
        return null;
    };
    LocalStorageFactory.TYPE_DEFAULT = "LocalStorage";
    return LocalStorageFactory;
}());



/***/ }),

/***/ "./src/app/services/localstorage/localstorage.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/localstorage/localstorage.service.ts ***!
  \***************************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _factories_localstorage_Storages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/localstorage/Storages */ "./src/app/services/localstorage/factories/localstorage/Storages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalstorageService = /** @class */ (function () {
    function LocalstorageService() {
        this.storage = _factories_localstorage_Storages__WEBPACK_IMPORTED_MODULE_1__["LocalStorageFactory"].get(_factories_localstorage_Storages__WEBPACK_IMPORTED_MODULE_1__["LocalStorageFactory"].TYPE_DEFAULT);
    }
    LocalstorageService_1 = LocalstorageService;
    LocalstorageService.prototype.set = function (key, value) {
        if (value) {
            this.storage.set(key, JSON.stringify(value));
            return true;
        }
        return false;
    };
    LocalstorageService.prototype.get = function (key) {
        var data = this.storage.get(key);
        return data ? JSON.parse(data) : null;
    };
    LocalstorageService.prototype.reset = function () {
        this.storage.reset();
    };
    LocalstorageService.getInstance = function () {
        if (!LocalstorageService_1.instance) {
            console.log("creating instance local storage");
            LocalstorageService_1.instance = new LocalstorageService_1();
        }
        return LocalstorageService_1.instance;
    };
    LocalstorageService = LocalstorageService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalstorageService);
    return LocalstorageService;
    var LocalstorageService_1;
}());



/***/ }),

/***/ "./src/app/services/match/match.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/match/match.service.ts ***!
  \*************************************************/
/*! exports provided: MatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchService = /** @class */ (function () {
    function MatchService(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/match";
        this.api_player = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/player";
    }
    MatchService.prototype.saveMatch = function (match) {
        return this.http.post(this.api, match)
            .toPromise()
            .then(function (success) { return success.json(); });
    };
    MatchService.prototype.getSummary = function () {
        return this.http.get(this.api_player + "/summary")
            .toPromise()
            .then(function (success) { return success.json(); });
    };
    MatchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MatchService);
    return MatchService;
}());



/***/ }),

/***/ "./src/app/services/player/player.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/player/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/player";
    }
    PlayerService.prototype.getByName = function (names) {
        return this.http.get(this.api, { params: { names: names } })
            .toPromise()
            .then(function (success) { return success.json(); })
            .then(function (players) {
            var Players = players.docs;
            return Promise.resolve(Players);
        });
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    total_players: 2,
    api: "http://localhost:1337/api/v1"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\game-of-drones-compose\game-of-drones-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map