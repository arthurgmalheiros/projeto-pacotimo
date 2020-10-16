module.exports = {
    extends: ["airbnb"],
    plugins: ["react", "prettier"],
    parser: "babel-eslint",
    rules: {
        "comma-dangle": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "import/prefer-default-export": "off",
        "react/jsx-one-expression-per-line": "off"
    },
    settings: {
        "import/resolver": {
            "babel-module": {}
        }
    }
};
