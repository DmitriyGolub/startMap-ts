//module.exports = {
// "env": {
//     "browser": true,
//     "es2021": true
// },
// "parser": "@typescript-eslint/parser",
// "parserOptions": {
//     "ecmaVersion": 12,
//     "sourceType": "module"
// },
// "plugins": [
//     "@typescript-eslint"
// ],
// overrides: [{
//     files: ["*.js"],
//     parser: "@babel/eslint-parser",
//     // plugins: ["@typescript-eslint"],
//     // extends: [
//     //   'plugin:react/recommended',
//     //   'plugin:@typescript-eslint/recommended',
//     //   'plugin:prettier/recommended'
//     // ]
// }],
// "rules": {}

module.exports = {
    parser: '@babel/eslint-parser',
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "globals": {},
    // Will look for webpack.config.js to resolve path
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "./webpack.config.js"
            }
        }
    },


    "rules": {

        // Your own javascript rules

    },
    // "ignore": [
    //     "node_modules",
    //     "/src/assets/spine"
    // ],
    overrides: [{
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],


        // If need to support jsx
        //     parserOptions: {
        //       ecmaFeatures: { jsx: true }
        //     },

        /**
         * Typescript Rules
         * https://github.com/bradzacher/eslint-plugin-typescript
         * Enable your own typescript rules.
         */
        rules: {
            // Prevent TypeScript-specific constructs from being erroneously flagged as unused
            "no-use-before-define": ["error", {"variables": false}],
            '@typescript-eslint/no-unused-vars': 'error',
            // Require PascalCased class and interface names
            // '@typescript-eslint/class-name-casing': 'error',
            // Require a specific member delimiter style for interfaces and type literals
            // Default Semicolon style
            // '@typescript-eslint/member-delimiter-style': 'error',
            // Require a consistent member declaration order
            // '@typescript-eslint/member-ordering': 'error',
            // Require consistent spacing around type annotations
            '@typescript-eslint/type-annotation-spacing': 'error',
        },
    }]
};