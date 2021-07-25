"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joystick_1 = __importDefault(require("../vendor/controller/Joystick"));
var joysticks_1 = __importDefault(require("../vendor/controller/joysticks"));
var MOVE_SPEED = 120;
var JUMP_FORCE = 360;
var BIG_JUMP_FORCE = 550;
var FALL_DEATH = 400;
var ENEMY_SPEED = 20;
// Game logic
var isJumping = true;
var Mario = /** @class */ (function () {
    function Mario(g, game_level, scoreLabel, joystick_index) {
        this.CURRENT_JUMP_FORCE = JUMP_FORCE;
        this.isJumping = false;
        this.set_keys();
        this.player = this.make_player(g);
        this.joy_index = joystick_index;
        this.controls(g);
        this.game_level = game_level;
        this.score_label = scoreLabel;
        this.score = 0;
    }
    Mario.prototype.make_player = function (g) {
        return g.add([
            g.sprite('mario'),
            g.solid(),
            g.pos(150, 120),
            g.body(),
            g.origin('bot')
        ]);
    };
    Mario.prototype.controls = function (g) {
        var _this = this;
        g.keyDown(this.keys.left, function () {
            _this.move_to_left();
        });
        g.keyDown(this.keys.right, function () {
            _this.move_to_right();
        });
        this.jump_logic(g);
        this.joystick_logic(this.joy_index);
        this.player.action(function () {
            var playpos = __assign({}, _this.player.pos);
            playpos.y = playpos.y - 30;
            g.camPos(playpos);
            if (_this.player.pos.y >= FALL_DEATH) {
                //go('lose', {score: scoreLabel.value})
                console.log("LOOOOSE");
                g.go('hello');
            }
        });
        this.collides(g);
    };
    Mario.prototype.move_to_left = function () {
        this.player.move(-MOVE_SPEED, 0);
    };
    Mario.prototype.move_to_right = function () {
        this.player.move(MOVE_SPEED, 0);
    };
    Mario.prototype.jump = function () {
        if (this.player.grounded()) {
            this.isJumping = true;
            this.player.jump(this.CURRENT_JUMP_FORCE);
        }
    };
    Mario.prototype.jump_logic = function (g) {
        var _this = this;
        this.player.action(function () {
            if (_this.player.grounded()) {
                _this.isJumping = false;
            }
        });
        g.keyPress(this.keys.jump, function () {
            _this.jump();
        });
        // @ts-ignore
        this.player.on("headbump", function (obj) {
            if (obj.is('coin-surprise')) {
                _this.game_level.spawn('$', obj.gridPos.sub(0, 1));
                g.destroy(obj);
                _this.game_level.spawn('}', obj.gridPos.sub(0, 0));
            }
            if (obj.is('mushroom-surprise')) {
                _this.game_level.spawn('#', obj.gridPos.sub(0, 1));
                g.destroy(obj);
                _this.game_level.spawn('}', obj.gridPos.sub(0, 0));
            }
        });
    };
    Mario.prototype.collides = function (g) {
        var _this = this;
        this.player.collides('coin', function (c) {
            g.destroy(c);
            _this.score_label.value++;
            _this.score_label.text = _this.score_label.value;
            _this.score++;
            _this.updateScoreLabel();
        });
    };
    Mario.prototype.updateScoreLabel = function () {
        var score_label = document.getElementById("score_label");
        // @ts-ignore
        score_label.innerText = "Score: " + this.score.toString();
    };
    Mario.prototype.set_keys = function () {
        this.keys = {
            jump: 'space',
            left: 'left',
            right: 'right'
        };
    };
    Mario.prototype.joystick_logic = function (joystick_index) {
        var _this = this;
        var joy_0 = new Joystick_1.default(joystick_index);
        joy_0.setMoveLeft(function () {
            _this.move_to_left();
        });
        joy_0.setMoveRight(function () {
            _this.move_to_right();
        });
        joy_0.setJump(function () {
            _this.jump();
        });
        var joystick_controller = new joysticks_1.default(function (evt) {
            // @ts-ignore
            var button = evt.detail;
            joy_0.evalButtonsPressed(button);
        }, function (evt) {
            // @ts-ignore
            var stick = evt.detail;
            joy_0.evalAnalog(stick);
        }, function (evt) {
            console.log(joystick_controller.controllerDetails());
        });
    };
    return Mario;
}());
exports.default = Mario;
