/**
 * Mixin to add reporter features to a class
 * provides a logger to report to.
 *
 * the reporting 'tag' is build from the class name. if another 'tag' is needed
 * overrde the method 'loggerTag()'
 *
 * @author: Bernhard Lukassen
 */

import {bootlogger, logger} from "/evolux.universe";

const dedicatedLogger = (tag, _logger) => {
    return {
        _delegate: _logger,

        log(level, ...message) {
            // todo: print timestamp formated
            this._delegate.log(level, `[${tag}] `, ...message);
        },

        info(...message) {
            this._delegate.info(`[${tag}] `, ...message);
        },

        warn(...message) {
            this._delegate.warn(`[${tag}] `, ...message);
        },

        error(note, err, ...message) {
            this._delegate.error(`[${tag}] ${note}` , err, ...message);
        },

        debug(...message) {
            this._delegate.debug(`[${tag}] `, ... message);
        }
    }
};

const Reporter = base => class Reporter extends base {

    constructor() {
        super(...arguments);
        this._logger = dedicatedLogger(this.loggerTag(), logger);
    }

    /**
     *  override by subclass when another tag is needed
     */
    loggerTag() {
        return this.constructor.name;
    }

    get logger() {
        return this._logger;
    }

    set logger(logger) {
        this._logger = logger;
    }

};

export default Reporter;
