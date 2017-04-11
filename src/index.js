/**
 * @since 2017-04-11 19:10:08
 * @author vivaxy
 */

import execa from 'execa';

export default (file, args) => {
    const promise = execa(file, args);
    promise.stdout.pipe(process.stdout);
    promise.stderr.pipe(process.stderr);
    return promise;
};
