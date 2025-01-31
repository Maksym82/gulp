function hello(cb) {
    console.log('Hello gulp');
    cb();
}

// exports.hello = hello;
exports.default = hello;