const arr = [false, "cat", 99, -7, 84, true, "JS", 8.25, null, "hi", [10, 30, 50], "orange"];

const counts = {number: 0, string: 0, boolean: 0, object: 0, undefined: 0, function: 0};

for (const item of arr) {
    const type = typeof item;
    if (!(type in counts)) {
        counts[type] = 0;
    }
    counts[type]++;
}
console.dir(counts);