/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { logger }                   from "/evolux.universe";

const Reporter = base => class Reporter extends base {

    constructor() {
        super(...arguments);
        this._logger = logger;
    }

    get logger() {
        return this._logger;
    }

    set logger(logger) {
        this._logger = logger;
    }

};

export default Reporter;
