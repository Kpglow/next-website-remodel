const path = require('path')
const glob = require('glob')

module.exports = {
  
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    AWS_URL: process.env.AWS_URL,
  },
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' }
  //   }
  // }
}