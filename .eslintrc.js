module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [["^\\u0000"], ["^@?\\w"], ["^src(/.*|$)"]],
      },
    ],
    "simple-import-sort/exports": "warn",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "always",
        bracketSpacing: true,
        endOfLine: "lf",
        htmlWhitespaceSensitivity: "css",
        printWidth: 100,
        quoteProps: "as-needed",
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
      },
    ],
    // TODO: change this back to error
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
