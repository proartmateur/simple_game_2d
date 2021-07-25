"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BG_BLACK = [0, 0, 0, 1];
// const BG_BLUE = [0, 0, 1, 1];
exports.default = {
    width: 320,
    height: 240,
    scale: 2,
    clearColor: BG_BLACK,
    fullscreen: false,
    debug: false,
    global: true,
    canvas: document.getElementById("game"),
};
