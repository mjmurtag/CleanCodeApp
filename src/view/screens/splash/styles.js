"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var typography_1 = require("../../styles/typography");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: typography_1.TYPOGRAPHY.COLOR.Default,
    },
    reactImage: {
        width: '70%',
    },
    image: {
        flex: 3,
        width: '70%',
        marginTop: '10%',
    },
    enterButton: {
        marginBottom: '10%',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: '5%'
    },
});
exports.default = styles;
