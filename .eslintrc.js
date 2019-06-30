module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 8,
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "rules": {
    // "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2],
    // "linebreak-style": ["warn", "unix"],
    "linebreak-style": [0, "warn", "windows"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-console": "off",
  },
};
