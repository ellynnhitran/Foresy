module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@components": "./app/components",
          "@screens": "./app/screens",
          "@assets": "./assets",
          "@actions": "./app/redux/actions",
          "@store": "./app/store",
          "@models": "./app/models",
          "@services": "./app/services",
          "@theme": "./app/theme",
          "@utils": "./app/utils",
          "@navigators": "./app/navigators",
          "@apis": "./app/apis",
          "@images": "./app/assets/images.ts",
        }
      }
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
  ],
}
