/**
 * base class for supervised errors
 * may contain a chain of causes
 *
 * @author: blukassen
 */

export default class EError extends Error {

    constructor(message, code, cause) {
        super(message);
        this.code   = code;
        this._cause  = cause;
    }

    /**
     * resolve error cause to the first one
     * @returns {Error}
     */
    get cause() {
        return (this._cause)
            ? this._cause.cause || this._cause
            : this;
    }

}
