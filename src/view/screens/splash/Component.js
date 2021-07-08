"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var navigation_1 = require("../../../navigators/navigation");
var styles_1 = __importDefault(require("./styles"));
var buttons_1 = require("../../elements/buttons");
var Splash = /** @class */ (function (_super) {
    __extends(Splash, _super);
    function Splash(props) {
        var _this = _super.call(this, props) || this;
        _this.navigateToHome = function () {
            navigation_1.tabbedNavigation();
        };
        _this.state = {};
        return _this;
    }
    Splash.prototype.componentDidMount = function () {
        var splashLaunched = this.props.splashLaunched;
        splashLaunched();
    };
    Splash.prototype.render = function () {
        var intro = 'Spending time keeping your code clean is not just cost effective; it’s a matter of professional survival.';
        return (React.createElement(react_native_1.SafeAreaView, { style: { flex: 1 } },
            React.createElement(react_native_1.View, { style: styles_1.default.container },
                React.createElement(react_native_1.Image, { style: styles_1.default.image, resizeMode: "contain", source: require('../../assets/images/CleanCode.png') }),
                React.createElement(react_native_1.Image, { resizeMode: "center", source: require('../../assets/images/rn_ts.png') }),
                React.createElement(react_native_1.Text, { style: styles_1.default.text }, intro),
                React.createElement(buttons_1.BUTTON_DEFAULT, { style: styles_1.default.enterButton, title: "Continue To App", onClick: this.navigateToHome }))));
    };
    return Splash;
}(React.PureComponent));
exports.default = Splash;
