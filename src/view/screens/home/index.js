"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Component_1 = __importDefault(require("./Component"));
var mapStateToProps = function () { return ({}); };
var mapDispatchToProps = function () { return ({}); };
var homeContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Component_1.default);
exports.default = homeContainer;
