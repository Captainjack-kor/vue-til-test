module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "no-console": "off",
      // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
      "prettier/prettier": ['error', {
        singleQuote: true,
        semi: true,
        // semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      }]
    }
};

// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ["plugin:vue/essential", "@vue/prettier"],
//   rules: {
//     "no-console": "off",
//     // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
//     // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
//     "prettier/prettier": ['error', {
//       singleQuote: true,
//       // semi: true,
//       semi: false,
//       useTabs: false,
//       tabWidth: 2,
//       trailingComma: 'all',
//       printWidth: 80,
//       bracketSpacing: true,
//       arrowParens: 'avoid',
//     }]
//   },
//   parserOptions: {
//     parser: "babel-eslint"
//   },
//   overrides: [
//     {
//       files: [
//         "**/__tests__/*.{j,t}s?(x)",
//         "**/tests/unit/**/*.spec.{j,t}s?(x)"
//       ],
//       env: {
//         jest: true
//       }
//     }
//   ]
// };
