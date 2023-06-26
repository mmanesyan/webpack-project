const path=require("path")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

const mode=process.env.NODE_ENV
module.exports={
    mode,
    entry: "./src/index.js" ,
    output:{
        filename: `${mode==="production" ? "[hash]" : "bundle"}.js`,
        path:path.resolve(__dirname,"dist"),
    },
    module:{
        rules:[
            {test: /\.css$/i, use:['style-loader','css-loader']}
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template: "./index.html",
    }),
    new CleanWebpackPlugin(),
   ]
}
