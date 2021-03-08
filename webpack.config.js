const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  target: 'node',
  optimization: {
    minimize: false,
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: './dist/main.js',
  output: {
    path: path.resolve(__dirname, 'webpack-dist'),
    filename: 'server.bundle.js',
  },
  externals: {
    // '@acs/exploit-server-license': 'commonjs @acs/exploit-server-license',
    // '@acs/exploit-server-vault': 'commonjs @acs/exploit-server-vault',
    // '@acs/exploit-server-web-interface': 'commonjs @acs/exploit-server-web-interface',
    // '@nestjs/swagger': 'commonjs @nestjs/swagger',
    // 'swagger-ui-express': 'commonjs swagger-ui-express',
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets',
          '@nestjs/websockets/socket-module',
          'cache-manager',
          'class-transformer',
          'class-validator',
          'fastify-swagger',
          'fastify-static',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
  ],
};
