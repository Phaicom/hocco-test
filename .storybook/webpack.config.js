const path = require('path')

module.exports = ({ config }) => {
  config.resolve.extensions.push(
    '.ts',
    '.js',
    '.vue',
    '.css',
    '.scss',
    '.html',
  )

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../'),
    '~': path.resolve(__dirname, '../'),
  }

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
    ],
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
      },
    ],
  })

  return config
}
