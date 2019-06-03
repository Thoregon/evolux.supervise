/**
 * base class for supervised errors
 * may contain a chain of causes
 *
 * @author: blukassen
 */

class EError extends Error {

    constructor(message, code, cause) {
        super(message);
        this.code   = code;
        this._cause  = cause;
    }

    /**
     * resolve error cause to the first one
     * @returns {CommError}
     */
    get cause() {
        return (this._cause)
            ? this._cause.cause || this._cause
            : this;
    }

}

module.exports = EError;
