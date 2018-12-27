const promise = new Promise((resolve, reject) => {
    resolve();
});
promise
    .then(() => console.log('I ran'))
    .then(() => { throw new Error('Help I am an error'); })
    .then(undefined,() => {throw new Error('Help I am an error');})
    .catch((err) => console.log('uh oh error'))

