const images = require("./modules/images.js");
const css = require("./modules/css.js");

const build_dir = "public";
async function optimize() {
    await images.optimize(build_dir);
    await css.optimize(build_dir);
}

optimize();