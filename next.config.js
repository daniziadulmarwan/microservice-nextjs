const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");

const path = require("path");

module.exports = withPlugins([withCss({})]);
