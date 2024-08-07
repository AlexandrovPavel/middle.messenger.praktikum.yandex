export default [
    {
        "extends": "airbnb-base",
        "parser": "@typescript-eslint/parser",
        "plugins": ["@typescript-eslint"],
        "ignores": ["/dist", "/node_modules", "*.config.js", "**/*.test.ts"],
        "rules": {
            "indent": [2, 4],
            "arrow-body-style": "off",
            "import/prefer-default-export": "off",
            "import/no-unresolved": "off",
            "import/extensions": "off",
            "no-tabs": ["error", { "allowIndentationTabs": true }],
            "no-underscore-dangle": "off",
            "class-methods-use-this": "off",
            "no-unused-vars": ["error", { "args": "none" }],
            "max-classes-per-file": "off",
            "new-cap": "off",
            "no-plusplus": "off",
            "no-nested-ternary": "off"
        },
        "root": true,
        "env": {
            "browser": true
        }
    }
]
