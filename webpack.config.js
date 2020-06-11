/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020-05-28 13:47
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-05-28 13:47
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "swfobject": ['./src/swfobject']
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
