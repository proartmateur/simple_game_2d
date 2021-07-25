"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joystick = /** @class */ (function () {
    function Joystick(index) {
        this.index = index;
    }
    //region Set Events
    Joystick.prototype.setMoveLeft = function (callback) {
        this.moveLeft = callback;
    };
    Joystick.prototype.setMoveRight = function (callback) {
        this.moveRight = callback;
    };
    Joystick.prototype.setJump = function (callback) {
        this.jump = callback;
    };
    //endregion
    //region Eval Buttons Pressed
    Joystick.prototype.evalButtonsPressed = function (button) {
        console.log(button.name);
        if (button.controllerIndex === this.index) {
            if (button.name === "FACE_3" && button.pressed) {
                this.jump();
            }
            if (button.name === "DPAD_LEFT" && button.pressed) {
                console.log("--- Left ----");
            }
        }
    };
    //endregion
    //region Eval Analog Hold
    Joystick.prototype.evalAnalog = function (axe) {
        console.log("angle:" + axe.angle.degrees);
        if (axe.controllerIndex === this.index) {
            var trying_left = 130 < axe.angle.degrees && axe.angle.degrees < 201;
            var trying_right = axe.angle.degrees < 42 || axe.angle.degrees > 300;
            if (axe.name === "LEFT_ANALOG_STICK" && trying_left) {
                this.moveLeft();
            }
            if (axe.name === "LEFT_ANALOG_STICK" && trying_right) {
                this.moveRight();
            }
        }
    };
    return Joystick;
}());
exports.default = Joystick;
