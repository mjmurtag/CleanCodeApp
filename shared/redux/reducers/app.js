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
var actionTypes_1 = require("../constants/actionTypes");
var initialState = {
    isLoading: true,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.ACTION_TYPES.SPLASH.SPLASH_LAUNCHED:
            return __assign(__assign({}, state), { isLoading: false });
        default:
            return state;
    }
});
