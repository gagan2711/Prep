// const HtmlWebpackPlugin = require('html-webpack-plugin'),
// 	ExtractTextPlugin = require('extract-text-webpack-plugin'),
// 	path = require('path');
// var extractTextPlugin = new ExtractTextPlugin({
// 	filename: 'component.css'
// });
// module.exports = {
// 	entry: [ './src/Container.js' ],
// 	output: {
// 		path: path.resolve(__dirname, 'micro-app'),
// 		library: 'container',
// 		filename: 'component.js',
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   },
//   devtool: 'eval-source-map',
// 	module: {
// 		rules: [
// 			{
// 				exclude: '/node_modules/',
// 				loader: 'babel-loader',
// 				options: {
// 					presets: [ '@babel/preset-react' ]
// 				},
// 				test: /\.jsx?$/
// 			},
// 			{
// 				exclude: '/node_modules/',
// 				use: extractTextPlugin.extract({
// 					use: [ 'css-loader' ]
// 				}),
// 				test: /\.css$/
// 			},
// 			{
// 				test: /\.svg$/,
// 				loader: 'svg-inline-loader'
// 			}
// 		]
// 	},
//   externals: {       
//     react: {          
//         commonjs: "react",          
//         commonjs2: "react",          
//         amd: "React",          
//         root: "_"      
//     },      
//     "react-dom": {          
//         commonjs: "react-dom",          
//         commonjs2: "react-dom",          
//         amd: "ReactDOM",          
//         root: "_"      
//     }  
// },
// 	plugins: [ extractTextPlugin ]
// };
path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
module.exports = [{
  entry: './src/Container.js',
  output: {
    path:path.resolve(__dirname, 'micro-app'),
    filename: 'bundle2.js',
    library: 'container',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        				exclude: '/node_modules/',
        				loader: 'babel-loader',
        				options: {
        					presets: [ '@babel/preset-react' ]
        				},
                test: /\.jsx?$/
      }
    ]
  },
  mode: "production",
  plugins: [
      new MinifyPlugin()
  ]},
  ];