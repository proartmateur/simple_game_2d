"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kaboom_1 = __importDefault(require("kaboom"));
var configuration_1 = __importDefault(require("./configuration"));
var k = kaboom_1.default(configuration_1.default);
exports.default = k;
