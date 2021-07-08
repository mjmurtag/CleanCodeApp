"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var typography_1 = require("../../styles/typography");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: typography_1.TYPOGRAPHY.COLOR.Default,
    },
    image: {
        flex: 4,
        flexDirection: 'column',
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
    }
});
exports.default = styles;
