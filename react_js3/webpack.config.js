var webpack = require("webpack");
module.exports={
    entry : "./src/index.js", //entry point is just source file
    output : { //path where we want output files
        path : '/dist/assets',
        filename : 'bundle.js',
        publicPath : 'assets'
    },
    devServer : {
        inline : true,
        contentBase : './dist',
        port : 3000
    },
    module : {
        loaders : [
            {
                test: /\.js?$/,
                exclude : /(node_modules)/,
                loader :'babel-loader',
                query:{
                    presets:['latest','react','stage-0']
                 }
            }
        ]
    }   
}