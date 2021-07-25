"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JoystickController = /** @class */ (function () {
    function JoystickController(buttonPressCallback, analogStartCallback, onJoysticksConenected) {
        var _this = this;
        // @ts-ignore
        this.controllers = Controller.search();
        this.controllers_details = [];
        this.buttonPressCallback = buttonPressCallback;
        this.analogStartCallback = analogStartCallback;
        window.addEventListener("gc.button.press", function (event) {
            buttonPressCallback(event);
        }, false);
        window.addEventListener("gc.analog.hold", function (event) {
            analogStartCallback(event);
        }, false);
        window.addEventListener('gc.controller.found', function (event) {
            // @ts-ignore
            var controller = event.detail.controller;
            _this.controllers_details.push({
                index: controller.index,
                name: controller.name
            });
            var status = true;
            onJoysticksConenected(event, status);
        }, false);
    }
    JoystickController.prototype.controllerDetails = function () {
        return this.controllers_details;
    };
    return JoystickController;
}());
exports.default = JoystickController;
