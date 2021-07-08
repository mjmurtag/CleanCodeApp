"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_navigation_1 = require("react-native-navigation");
var store_1 = __importDefault(require("../../shared/redux/store"));
var screens_1 = require("../view/screens");
var navigation_1 = require("./navigation");
/**
 * Register screens and components for react native navigation
 */
screens_1.registerScreens({ store: store_1.default });
/**
 * Entry point for the app
 * showSplash() -> As the name suggests, shows the splash screen.
 *                 If you do not want a splash screen, directly call `tabbedNavigation()`
 *                 defined in './navigation'
 */
var app = function () {
    react_native_navigation_1.Navigation.events().registerAppLaunchedListener(function () {
        react_native_navigation_1.Navigation.setDefaultOptions({
            /**
             * Add default options right here
             */
            topBar: { visible: true, elevation: 0 },
        });
        navigation_1.showSplash();
    });
};
exports.default = app;
