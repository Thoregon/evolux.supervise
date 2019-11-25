/**
 *
 *
 * @author: Bernhard Lukassen
 */

const Reporter = base => class Reporter extends base {

    get logger() {
        return this._logger;
    }

    set logger(logger) {
        this._logger = logger;
    }

};

export default Reporter;
