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
var react_native_navigation_1 = require("react-native-navigation");
var react_native_1 = require("react-native");
var custom_1 = require("../../elements/custom");
var router_1 = __importDefault(require("../../../navigators/router"));
var buttons_1 = require("../../elements/buttons");
var styles_1 = __importDefault(require("./styles"));
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.showPushScreen = function () {
            var componentId = _this.props.componentId;
            router_1.default.showPushScreen({
                componentId: componentId,
                passProps: {
                    dummyText: 'Hello from Home !!!',
                },
            });
        };
        react_native_navigation_1.Navigation.events().bindComponent(_this);
        _this.state = {
            name: props.name || 'Redux + TypeScript + React Native Navigation',
        };
        return _this;
    }
    Home.prototype.componentDidMount = function () { };
    Home.prototype.showBurgerMenu = function () {
        react_native_navigation_1.Navigation.mergeOptions('drawerComponentId', {
            sideMenu: {
                left: {
                    visible: true,
                },
            },
        });
    };
    Home.prototype.render = function () {
        var name = this.state.name;
        return (React.createElement(react_native_1.SafeAreaView, { style: styles_1.default.container },
            React.createElement(react_native_1.TouchableOpacity, { onPress: this.showBurgerMenu },
                React.createElement(react_native_1.Image, { style: styles_1.default.image, resizeMode: "contain", source: require('../../assets/images/burger-menu.png') })),
            React.createElement(custom_1.CText, null, name),
            React.createElement(buttons_1.BUTTON_DEFAULT, { onClick: this.showPushScreen, title: 'Push Screen', style: styles_1.default.button })));
    };
    return Home;
}(React.PureComponent));
exports.default = Home;
