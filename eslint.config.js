import wsvaio, { vue } from "@wsvaio/eslint-config";

export default wsvaio(
  {
    // unocss: true,
    ignores: [
      "node_modules/*",
      "public/*",
      "dist/*",
      "**/* copy*",
      "**.auto-import.d.ts",
      "**/auto-components.d.ts",

      "**/*.js",
    ],
  },
  vue,
  {
    rules: {
      "ts/consistent-type-definitions": "off",
      "vue/no-parsing-error": "off",
      "vue/no-template-shadow": "off",
      "vue/max-attributes-per-line": "off",
      "vue/first-attribute-linebreak": "off",
      "vue/html-closing-bracket-newline": "off",
    },
  }
);
