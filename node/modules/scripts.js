const fs = require("fs");
const globby = require("globby");
const terser = require('terser');
const utils = require("./utils");

exports.optimize = async (path) => {
    const glob = `${path}/**/*.{js,mjs}`;
    const paths = await globby(glob);

    // Minify JS
    console.log("\n--- Terser ---")
    paths.forEach(async function (file) {
        const terserResult = await terser.minify(fs.readFileSync(file, 'utf8'));

        if (terserResult.error) {
            console.log(`Minifying ${file} error.`, terserResult.error);
        }
        else {
            const { size: oldSize } = fs.statSync(file);
            fs.writeFileSync(file, terserResult.code);
            const { size: newSize } = fs.statSync(file);

            // Report result of minification
            console.log(`Minified ${file}: ${utils.print_diff(oldSize, newSize)}`)
        }
    });
};