var webpack = require("webpack");
module.exports = {
    entry : "./src/index.js", //entry point is just source file
    output : { //path where we want output files
        filename : './dist/assets/bundle.js'
    }, 
    devServer:{
        inline:true,
        contentBase:'./dist',
        port:3000
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
            },
            {
                test : /\.scss$/,
                loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    }   
}