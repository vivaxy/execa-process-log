/**
 * @since 2017-04-11 19:10:08
 * @author vivaxy
 */

const execa = require('execa');

module.exports = function execaProcessLog(file, args, opt) {
    const promise = execa(file, args, opt);
    promise.stdout.pipe(process.stdout);
    promise.stderr.pipe(process.stderr);
    return promise;
};
