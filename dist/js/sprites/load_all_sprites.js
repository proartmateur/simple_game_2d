"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assets_path = '/dist/assets/art/sprites';
function loadAllSprites(k) {
    k.loadSprite('mark', assets_path + "/mark.png");
    k.loadSprite('block', assets_path + "/block.png");
    k.loadSprite('brick', assets_path + "/brick.png");
    k.loadSprite('coin', assets_path + "/coin.png");
    k.loadSprite('evil-shroom', assets_path + "/evil_shroom.png");
    k.loadSprite('mario', assets_path + "/mario.png");
    k.loadSprite('mushroom', assets_path + "/mushroom.png");
    k.loadSprite('surprise', assets_path + "/surprise.png");
}
exports.default = loadAllSprites;
