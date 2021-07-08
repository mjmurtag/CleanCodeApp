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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defined application routes over here
 * Good place to define some commonly used methods like
 *          `popToScreen`, `dismissModal`...
 */
var react_native_navigation_1 = require("react-native-navigation");
var screen_1 = require("../constants/screen");
/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
var showPushScreen = function (_a) {
    var componentId = _a.componentId, _b = _a.passProps, passProps = _b === void 0 ? {} : _b;
    react_native_navigation_1.Navigation.push(componentId, {
        component: {
            name: screen_1.SCREENS.Dummy,
            id: screen_1.SCREENS.Dummy,
            passProps: __assign({}, passProps),
            options: {
                topBar: {
                    visible: true,
                },
            },
        },
    });
};
var popToScreen = function (componentId) {
    react_native_navigation_1.Navigation.popTo(componentId);
};
var dismissModal = function (componentId) {
    react_native_navigation_1.Navigation.dismissModal(componentId);
};
var pop = function (_a) {
    var componentId = _a.componentId;
    return react_native_navigation_1.Navigation.pop(componentId);
};
var popToRoot = function (_a) {
    var componentId = _a.componentId;
    return react_native_navigation_1.Navigation.popToRoot(componentId);
};
var ROUTER = {
    showPushScreen: showPushScreen,
    popToScreen: popToScreen,
    dismissModal: dismissModal,
    pop: pop,
    popToRoot: popToRoot,
};
exports.default = ROUTER;
