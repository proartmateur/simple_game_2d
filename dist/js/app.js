"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kaboom_1 = __importDefault(require("./kaboom"));
var hello_1 = __importDefault(require("./scenes/hello"));
var level1_1 = __importDefault(require("./scenes/level1"));
var load_all_sprites_1 = __importDefault(require("./sprites/load_all_sprites"));
console.log("Primer Juego Simple");
load_all_sprites_1.default(kaboom_1.default);
kaboom_1.default.layers(['bg', 'obj', 'ui'], 'obj');
kaboom_1.default.scene('hello', hello_1.default);
kaboom_1.default.scene('level_1', level1_1.default);
kaboom_1.default.scene('main', function (data) {
    console.log(data);
    // @ts-ignore
    kaboom_1.default.go('level_1', data);
});
// @ts-ignore
kaboom_1.default.start('main', { level_num: 0, score: 0 });
