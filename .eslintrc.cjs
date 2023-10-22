module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": "error",
        "vue/multi-word-component-names": "off",
    }
};
