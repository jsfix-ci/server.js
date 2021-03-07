"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../src/index");
const index_2 = require("../../src/index");
const index_3 = require("../../src/index");
const metrics_controller_1 = __importDefault(require("./metrics.controller"));
class AppModule extends index_1.Module {
    constructor() {
        super(...arguments);
        this.declare = [
            index_2.LoggerService.config((options) => {
                options.level = 'debug';
            }),
            index_3.HttpService.config((options) => {
                options.port = 3000;
            }),
            metrics_controller_1.default,
        ];
    }
    onInit() {
        this.logger.action('AppModule.onInit').info(' ⚡');
    }
    onStop(reason) {
        this.logger.action('AppModule.onStop').info(reason);
    }
    onError(error) {
        this.logger.action('AppModule.onError').error(error.stack);
    }
}
exports.default = AppModule;
//# sourceMappingURL=metrics.module.js.map