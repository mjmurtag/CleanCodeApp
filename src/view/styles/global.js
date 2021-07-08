"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = exports.widgetPaddingValue = void 0;
var react_native_1 = require("react-native");
var typography_1 = require("./typography");
exports.widgetPaddingValue = 16;
var LAYOUT = react_native_1.StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: typography_1.TYPOGRAPHY.COLOR.Primary,
    },
    container: {
        flex: 1,
    },
    pageContainer: {
        padding: 16,
    },
    shadow: {
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
        elevation: react_native_1.Platform.OS === 'ios' ? 0 : 3,
    },
});
var CTA = {
    Style: react_native_1.StyleSheet.create({
        primary: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 48,
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: typography_1.TYPOGRAPHY.COLOR.Default,
        },
        primaryText: {
            fontSize: 16,
            color: typography_1.TYPOGRAPHY.COLOR.Primary,
            textAlign: 'center',
        },
        secondary: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 48,
            borderWidth: 1,
            backgroundColor: typography_1.TYPOGRAPHY.COLOR.Default,
            borderRadius: 5,
            borderColor: typography_1.TYPOGRAPHY.COLOR.Primary,
        },
        secondaryText: {
            color: typography_1.TYPOGRAPHY.COLOR.Primary,
            fontSize: 16,
            textAlign: 'center',
        },
    }),
    TouchableOpacity: {
        default: 0.8,
    },
};
var FONTS = react_native_1.StyleSheet.create({
    h1: {
        fontSize: 30,
        fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
        color: typography_1.TYPOGRAPHY.COLOR.DefaultSelected,
    },
    body: {
        fontSize: 16,
        fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
        color: typography_1.TYPOGRAPHY.COLOR.Default,
    },
    subTitle: {
        fontSize: 14,
        fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
        color: typography_1.TYPOGRAPHY.COLOR.Secondary,
    },
});
var TEXT = react_native_1.StyleSheet.create({
    Default: {
        textAlign: 'left',
        fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
        fontSize: 14,
        color: typography_1.TYPOGRAPHY.COLOR.Primary,
    },
    Bold: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
        color: typography_1.TYPOGRAPHY.COLOR.Primary,
    },
});
var TEXT_INPUT = {
    Style: react_native_1.StyleSheet.create({
        Default: {
            fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
            textAlign: 'left',
            fontSize: 12,
            borderWidth: 0.2,
            borderColor: typography_1.TYPOGRAPHY.COLOR.Border,
            color: typography_1.TYPOGRAPHY.COLOR.Primary,
        },
        Bold: {
            fontFamily: typography_1.TYPOGRAPHY.FONT.Primary,
            textAlign: 'left',
            fontSize: 12,
            borderWidth: 0.2,
            borderColor: typography_1.TYPOGRAPHY.COLOR.Border,
            color: typography_1.TYPOGRAPHY.COLOR.Primary,
        },
    }),
};
var GLOBAL = {
    LAYOUT: LAYOUT,
    CTA: CTA,
    FONTS: FONTS,
    TEXT: TEXT,
    TEXT_INPUT: TEXT_INPUT,
};
exports.GLOBAL = GLOBAL;
