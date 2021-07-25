"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kaboom_1 = __importDefault(require("../kaboom"));
var mario_1 = __importDefault(require("../players/mario"));
var Level1 = /** @class */ (function () {
    //endregion
    function Level1(g) {
        this.score = 0;
        this.map = this.get_map();
        this.conf = {
            width: 20,
            height: 20,
            '=': [g.sprite('block'), g.solid()],
            '$': [g.sprite('coin'), 'coin'],
            '%': [g.sprite('surprise'), g.solid(), 'coin-surprise'],
            '*': [g.sprite('surprise'), g.solid(), 'mushroom-surprise'],
            '^': [g.sprite('evil-shroom'), g.solid(), 'dangerous'],
            '}': [g.sprite('brick'), g.solid()],
            '#': [g.sprite('mushroom'), g.solid(), 'mushroom', g.body()],
            // '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
            // ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
            // '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
            // '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
            // '!': [sprite('blue-block'), solid(), scale(0.5)],
            // '£': [sprite('blue-brick'), solid(), scale(0.5)],
            // 'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
            // '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
            // 'x': [sprite('blue-steel'), solid(), scale(0.5)],
        };
    }
    Level1.prototype.get_map = function () {
        return [
            '=',
            '=',
            '=                                                        =',
            '=                                                        =',
            '=              $   $$$$$                                 =',
            '=                                                        =',
            '=         %  =*=%=                                       =',
            '=                                                        =',
            '=                                        $$              $ =',
            '=     =            ^   ^                      $          =',
            '============================   ====================   ====',
            '============================   ====================   ====',
            '============================   ====================   ====',
        ];
    };
    Level1.prototype.addToGameContext = function (g) {
        var gameLevel = g.addLevel(this.map, this.conf);
        var ui_y = 56;
        var scoreLabel = g.add([
            g.text(this.score.toString()),
            g.pos(30, ui_y),
            g.layer('ui'),
            {
                value: this.score,
            }
        ]);
        var player = new mario_1.default(g, gameLevel, scoreLabel, 0);
        g.add([
            g.text('level ' + parseInt("1")), g.pos(40, ui_y)
        ]);
        // @ts-ignore
        g.addLevel(this.map, this.conf);
    };
    return Level1;
}());
// @ts-ignore
var level_1 = function (data) {
    console.log("LV1 data");
    console.log(data);
    if (data.level_num === 0) {
        var level = new Level1(kaboom_1.default);
        level.addToGameContext(kaboom_1.default);
    }
};
exports.default = level_1;
