exports.print_diff = function (oldSize, newSize) {
    const oldKb = Number.parseFloat(oldSize / 1000).toPrecision(2);
    const newKb = Number.parseFloat(newSize / 1000).toPrecision(2);
    const percent = Number.parseFloat((newSize / oldSize) * 100).toPrecision(2);

    return `${oldKb} kB > ${newKb} kB (${percent}%)`;
}