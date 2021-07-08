"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUTTON_DEFAULT = void 0;
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var global_1 = require("../styles/global");
var custom_1 = require("./custom");
/**
 * Default Button
 */
var BUTTON_DEFAULT = function (_a) {
    var title = _a.title, onClick = _a.onClick, style = _a.style;
    return (React.createElement(react_native_1.TouchableOpacity, { activeOpacity: global_1.GLOBAL.CTA.TouchableOpacity.default, style: [global_1.GLOBAL.CTA.Style.primary, global_1.GLOBAL.LAYOUT.shadow, style], onPress: function () { return onClick(); } },
        React.createElement(custom_1.CText, { style: global_1.GLOBAL.CTA.Style.primaryText }, title)));
};
exports.BUTTON_DEFAULT = BUTTON_DEFAULT;
