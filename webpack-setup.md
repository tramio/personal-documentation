# Documentation
## Project initialization
### Webpack
    mkdir myProject
    cd myProject
    code .
    npm init -y
    npm install webpack webpack-cli --save-dev
    mkdir src src/fonts src/media src/modules dist
    touch src/index.js src/style.css dist/index.html webpack.config.js
    npm install --save-dev style-loader css-loader
### Git
    git init
    touch .gitignore
### Webpack.config.js
    const path = require('path');

    module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ]
      }
    };
### Package.json *(add)*
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "watch": "webpack --watch",
        "build": "webpack"
    },
