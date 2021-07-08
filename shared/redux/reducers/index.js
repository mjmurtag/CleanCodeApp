"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
var redux_1 = require("redux");
var app_1 = __importDefault(require("./app"));
exports.default = redux_1.combineReducers({
    app: app_1.default,
});
