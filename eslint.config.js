import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules", "dist", "build"],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },

    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Correct syntax
    },
  },
]);
