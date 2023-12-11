module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    project: "tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier", "react", "react-hooks"],
  root: false,
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "no-plusplus": "off",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
