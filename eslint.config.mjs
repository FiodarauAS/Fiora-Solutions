import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  extends: compat.extends("next/core-web-vitals", "plugin:react/recommended"),

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],

    "react/jsx-tag-spacing": ["error", {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never",
    }],

    indent: ["error", 2, {
      ignoredNodes: ["JSXElement *"],
    }],

    "react/jsx-curly-newline": "error",

    "react/jsx-curly-spacing": ["error", {
      when: "never",
    }],

    "react/jsx-wrap-multilines": ["error", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
    }],
  },
}]);