module.exports = [{
    entry: './app.scss',
    output: {
        filename: 'style-bundle.js', 
    },
    module: {
        rules: [{
            test :/\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: './server/public/bundle.css',
                    },

                },
                {loader: 'extract-loader'},
                {loader: 'css-loader'},
                {loader: 'sass-loader',
                options: {
                  importer: function(url, prev) {
                    if(url.indexOf('@material') === 0) {
                      var filePath = url.split('@material')[1];
                      var nodeModulePath = `./node_modules/@material/${filePath}`;
                      return { file: require('path').resolve(nodeModulePath) };
                    }
                    return { file: url };
                  }
                }},
            ]
        }]
    },
},
];

module.exports.push({
    entry: "./app.js",
    output: {
      filename: "./server/public/bundle.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
  });