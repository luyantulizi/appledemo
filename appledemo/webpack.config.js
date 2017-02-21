module.exports = {
    entry: [
       'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/only-dev-server',
          './src/index.js'
        ],
   module: {
         loaders: [{
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 loader: 'react-hot!babel'
               },
               {
                  test: /\.css$/,
                  include: /node_modules/,
                  loader: "style-loader!css-loader!sass-loader"
                },
                {
                  test: /\.scss$/,
                  exclude: /node_modules/,
                  loader: 'style-loader!css-loader!sass-loader'
                },
                {
                  test: /\.(png|jpg)$/,
                  exclude:  /node_modules/,
                  loader: 'url-loader'
                 }
         ]
       },
       babel: {
             presets: ['es2015', 'react','stage-0'],
              plugins: [ ['import', {
                   libraryName: 'antd',
                    style: 'css'
             }]]
          },
    resolve: {
          extensions: ['', '.js', '.jsx']
        },
    output: {
          path: __dirname + '/dist',
          publicPath: '/',
          filename: 'bundle.js'
        },
    devServer: {
          contentBase: './dist',
          hot: true
        }
};
