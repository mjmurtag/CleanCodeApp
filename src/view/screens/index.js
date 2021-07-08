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
exports.registerScreens = void 0;
var React = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_native_navigation_1 = require("react-native-navigation");
var screen_1 = require("../../constants/screen");
var Splash = __importStar(require("./splash"));
var Home = __importStar(require("./home"));
var Settings = __importStar(require("./settings"));
var Drawer = __importStar(require("./drawer"));
var Dummy = __importStar(require("./dummy"));
var registerComponentWithRedux = function (redux) { return function (name, screen) {
    react_native_navigation_1.Navigation.registerComponent(name, function () { return function (props) { return (React.createElement(react_redux_1.Provider, { store: redux.store },
        React.createElement(screen.default, __assign({}, props)))); }; }, function () { return screen.default; });
}; };
function registerScreens(redux) {
    registerComponentWithRedux(redux)(screen_1.SCREENS.Splash, Splash);
    registerComponentWithRedux(redux)(screen_1.SCREENS.Home, Home);
    registerComponentWithRedux(redux)(screen_1.SCREENS.Settings, Settings);
    registerComponentWithRedux(redux)(screen_1.SCREENS.Drawer, Drawer);
    registerComponentWithRedux(redux)(screen_1.SCREENS.Dummy, Dummy);
}
exports.registerScreens = registerScreens;
