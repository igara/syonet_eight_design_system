const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = (env, argv) => {
  const config = {
    target: 'node',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: ['./src/index.ts'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: 'syonet_eight_design_system',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      emotion: {
        commonjs: 'emotion',
        commonjs2: 'emotion',
      },
    },
    plugins: [
      new FileManagerPlugin({
        events: {
          onEnd: [
            {
              copy: [
                {
                  source: path.join(__dirname, 'dist'),
                  destination: path.join(
                    __dirname,
                    '../../node_modules/syonet_eight_design_system/dist',
                  ),
                },
              ],
            },
          ],
        },
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      alias: {
        '@design_system': path.resolve(__dirname),
      },
    },
  };

  return config;
};
