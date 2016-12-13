function curry(fn) {
    var c = curry.bind(this, fn = fn.bind.apply(fn, [this].concat([].slice.call(arguments, 1))));

    c.exec = fn;

    return c;
}

function sum() {
    return [].reduce.call(arguments, function (c, n) {
        return c + n;
    });
}

console.log(curry(sum, 1, 2)(3)(4, 5)(6, 7, 8).exec());
