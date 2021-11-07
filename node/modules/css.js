const fs = require("fs");
const purge = require("purgecss");
const utils = require("./utils");

exports.optimize = async (path) => {
    // Run PurgeCSS on all css
    let files = await new purge.PurgeCSS().purge({
        content: [path + '/index.html', path + '/**/*.js', path + '/**/*.html'],
        css: [path + '/css/*.css'],
    })
    console.log("\n--- Purge CSS ---")

    // Write result to files
    files.forEach(async function (file) {
        const { size: oldSize } = fs.statSync(file.file);
        fs.writeFileSync(file.file, file.css);
        const { size: newSize } = fs.statSync(file.file);

        // Report result of minification
        console.log(`Minified ${file.file}: ${utils.print_diff(oldSize, newSize)}`);
    });
}
