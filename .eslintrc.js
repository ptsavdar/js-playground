module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  'plugins': ['@typescript-eslint', 'prettier'],
  'env': {
      'browser': true,
      'es6': true,
      'jest': true
  },
  'extends': [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  'rules': {
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'no-unused-expressions': ['warn', {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    '@typescript-eslint/prefer-interface': 'off', // also want to use 'type'
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error']
  }
};