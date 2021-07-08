"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var typography_1 = require("../../styles/typography");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: typography_1.TYPOGRAPHY.COLOR.Default,
        marginHorizontal: 10,
    },
    image: {
        marginBottom: 20,
        width: 40,
        height: 40,
    },
    button: {
        alignSelf: 'center',
        marginTop: 50,
        width: 250,
    },
});
exports.default = styles;
