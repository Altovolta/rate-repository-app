const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');
defaultConfig.resolver.alias = {
  ...defaultConfig.resolver.alias,
  'rxjs': require.resolve('rxjs'),
};

defaultConfig.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Add this to fix the FileStore error
defaultConfig.cacheStores = [];

module.exports = defaultConfig;