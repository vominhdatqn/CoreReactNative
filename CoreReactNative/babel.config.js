const PROD = process.env.NODE_ENV === 'production' || process.env.BABEL_ENV === 'production'

const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.ts', '.tsx', '.json'],
      alias: {},
    },
  ],
]
if (PROD) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...plugins, 'react-native-reanimated/plugin'],
}
