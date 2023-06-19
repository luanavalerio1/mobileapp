module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin',
      ['modules:react-native-dotenv', {
        "moduleName": "@env",
        "path": false,
        "allowUndefined": true
      }]]
  };
};
