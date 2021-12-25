const config = require('../../jest.config.js');

module.exports = {
  ...config,
  moduleNameMapper: {
    '^@design_system/(.+)': '<rootDir>/$1',
    ...config.moduleNameMapper,
  },
};
