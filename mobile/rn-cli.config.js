const path = require('path');

module.exports = {
  extraNodeModules: {
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    'prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
    'react-native-svg': path.resolve(
      __dirname,
      'node_modules/react-native-svg'
    ),
  },
  getProjectRoots: () => [
    path.resolve(__dirname),
    path.resolve(__dirname, '../src'),
  ],
};
