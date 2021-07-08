"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splashLaunched = void 0;
/**
 * Single location for Actions dispatched at `app` level
 */
var actionTypes_1 = require("../constants/actionTypes");
exports.splashLaunched = function () { return ({
    type: actionTypes_1.ACTION_TYPES.SPLASH.SPLASH_LAUNCHED,
}); };
