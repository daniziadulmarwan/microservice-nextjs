const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withReactSvg = require("next-react-svg");

const path = require("path");

module.exports = withPlugins([withCss({})]);
