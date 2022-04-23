/**
 * ===========================================================================
 * Constants for HTTP request, base URL and header to set
 * All HTTP config should be set below this sections
 * ===========================================================================
 */

/**
 * Server path base
 *
 * @type {string}
 */
const SERVER_PATH_BASE = __DEV__ ? 'http://localhost:3102' : 'https://stomdev.com:3102';
/** [
 * Api path base
 *
 * @type {string}
 */
const API_PATH = `${SERVER_PATH_BASE}/api/`;

export { API_PATH, SERVER_PATH_BASE }
