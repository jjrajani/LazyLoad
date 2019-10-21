const path = require("path");

const resolve = {
  alias: {
    hoc: path.resolve(__dirname, "../src/hoc/"),
    components: path.resolve(__dirname, "../src/components/"),
    utils: path.resolve(__dirname, "../src/utils/")
  }
};

module.exports = resolve;
