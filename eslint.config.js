const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const {globals} = require("eslint-config-expo");

module.exports = defineConfig([
    globalIgnores(['dist/*']),
    expoConfig,
    {
        files: ['babel.config.js'],
        languageOptions: {
            globals: globals.node,
        },
    },
]);
