// Write a method removeDuplicates() for Array.prototype that returns a new array with duplicates removed. For example, [1, 2, 2, 3].removeDuplicates() should return [1, 2, 3].

Array.prototype.removeDuplicates = function () {
    const uniqueArray = [];

    for (let i = 0; i < this.length; i++) {
        if (!uniqueArray.includes(this[i])) {
            uniqueArray.push(this[i]);
        }
    }

    return uniqueArray;
};

console.log([1, 2, 2, 3].removeDuplicates());
console.log(["a", "b", "b", "c"].removeDuplicates());
