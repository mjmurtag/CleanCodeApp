"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabbedNavigation = exports.showSplash = void 0;
/**
 * Application navigation stacks to be defined here.
 */
var react_native_navigation_1 = require("react-native-navigation");
var screen_1 = require("../constants/screen");
var typography_1 = require("../view/styles/typography");
exports.showSplash = function () {
    react_native_navigation_1.Navigation.setRoot({
        root: {
            component: { name: screen_1.SCREENS.Splash },
        },
    });
};
exports.tabbedNavigation = function () {
    return react_native_navigation_1.Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        name: screen_1.SCREENS.Drawer,
                        id: 'drawerComponentId',
                    },
                },
                center: {
                    bottomTabs: {
                        id: 'BottomTabsId',
                        children: [
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: screen_1.SCREENS.Home,
                                                passProps: {
                                                    text: 'This is Home',
                                                },
                                            },
                                        },
                                    ],
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: true,
                                        },
                                        bottomTab: {
                                            fontSize: 14,
                                            text: 'Home',
                                            textColor: typography_1.TYPOGRAPHY.COLOR.Primary,
                                            selectedTextColor: typography_1.TYPOGRAPHY.COLOR.Warning,
                                            selectedIconColor: typography_1.TYPOGRAPHY.COLOR.Warning,
                                            icon: require('../view/assets/images/tabbar/home.png'),
                                            selectedIcon: require('../view/assets/images/tabbar/home.png'),
                                        },
                                    },
                                },
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: screen_1.SCREENS.Settings,
                                            },
                                        },
                                    ],
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: true,
                                        },
                                        bottomTab: {
                                            text: 'Settings',
                                            fontSize: 14,
                                            textColor: typography_1.TYPOGRAPHY.COLOR.Primary,
                                            selectedTextColor: typography_1.TYPOGRAPHY.COLOR.Warning,
                                            selectedIconColor: typography_1.TYPOGRAPHY.COLOR.Warning,
                                            icon: require('../view/assets/images/tabbar/settings.png'),
                                            selectedIcon: require('../view/assets/images/tabbar/settings.png'),
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            },
        },
    });
};
exports.default = exports.tabbedNavigation;
