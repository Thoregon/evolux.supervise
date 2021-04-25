/**
 * Mixin to add reporter features to a class
 * provides a logger to report to.
 *
 * the reporting 'tag' is build from the class name. if another 'tag' is needed
 * overrde the method 'loggerTag()'
 *
 * @author: Bernhard Lukassen
 */

// import { bootlogger, logger }   from "/evolux.universe";
const logger = globalThis.universe ? globalThis.universe.logger : console;

const dedicatedLogger = (tag, _logger) => {
    let _delegate;
    const delegate = () => {
        if (_delegate) return _delegate;
        if (_logger) {
            _delegate = _logger;
            return _delegate;
        }
        if (globalThis.universe) {
            _delegate = globalThis.universe.logger;
            return _delegate;
        }
        return console;
    }
    return {

        log(level, ...message) {
            // todo: print timestamp formated
            delegate().log(level, `[${tag}] `, ...message);
        },

        info(...message) {
            delegate().info(`[${tag}] `, ...message);
        },

        warn(...message) {
            delegate().warn(`[${tag}] `, ...message);
        },

        error(note, err, ...message) {
            delegate().error(`[${tag}] ${note}` , err, ...message);
        },

        debug(...message) {
            delegate().debug(`[${tag}] `, ... message);
        }
    }
};

const Reporter = (base) => class Reporter extends (base || Object) {

    constructor() {
        super(...arguments);
        this._logger = dedicatedLogger(this.loggerTag());
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
