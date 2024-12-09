import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
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

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        "jsx-a11y": fixupPluginRules(jsxA11Y),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: babelParser,
        parserOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true,
            },
            requireConfigFile: false,
            babelOptions: {
                presets: ["@babel/preset-react"],
            },
        },
    },

    rules: {
        "react/prop-types": "off",

        "prettier/prettier": ["error", {
            endOfLine: "auto",
            semi: true,
            singleQuote: true, 
            trailingComma: "es5",
        }],
    },
}];