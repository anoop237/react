var webpack = require("webpack");
module.exports = {
    entry : "./src/index.js", //entry point is just source file
    output : { //path where we want output files
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude : /(node_modules)/,
                loader :'babel-loader',
                query:{
                    presets:['env','react']
                 }
            }
        ]
    }   
}