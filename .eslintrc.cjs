module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs", ".gitignore", ".prettierignore", "*.html"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "off",
    "no-unused-vars": "off",
  },
};
