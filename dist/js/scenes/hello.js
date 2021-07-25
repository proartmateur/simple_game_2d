"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kaboom_1 = __importDefault(require("../kaboom"));
var helloScn = function () {
    console.log('hello world');
    kaboom_1.default.layers(['bg', 'obj', 'ui'], 'obj');

    kaboom_1.default.add([
        kaboom_1.default.text("Hello Game Dev js!", 8),
        kaboom_1.default.pos(kaboom_1.default.width() * 0.5, kaboom_1.default.height() * 0.5),
        kaboom_1.default.origin('center')
    ]);
};
exports.default = helloScn;
