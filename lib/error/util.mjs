/**
 *
 *
 * @author: Bernhard Lukassen
 */

export const emsg = (err) => !!err ? err.trace ? `\n${err.trace()}` : err.stack ? `\n${err.stack}` : err.message ? ` --> ${err.message}` : err.toString() : '';
