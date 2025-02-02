/**
 * @typedef {('any' | 'video' | 'live')} Type Specifies the type of content
 * @typedef {('relevance' | 'upload_date' | 'view_count' | 'rating_ascending')} Sort Specifies the sort
 */

/**
 * Mapping sp values
 * @type {Object<string, Object<string, string>>}
 */
const spMapping = {
    any: {
        relevance: 'CAASAhAB',
        upload_date: 'CAI%253D',
        view_count: 'CAMSAhAB',
        rating_ascending: 'CAESAhAB',
    },
    video: {
        relevance: 'CAASAhAB',
        upload_date: 'CAISAhAB',
        view_count: 'CAMSAhAB',
        rating_ascending: 'CAESAhAB',
    },
    live: {
        relevance: 'EgJAAQ%253D%253D',
        upload_date: 'CAISBBABQAE%253D',
        view_count: 'CAMSBBABQAE%253D',
        rating_ascending: 'CAESBBABQAE%253D',
    },
}; // idk how this sps make

/**
 * Returns the option 'sp' value based on the type and sort
 *
 * @param {Type} type - The type of content (e.g., 'any', 'video', 'live')
 * @param {Sort} sort - The sorting (e.g., 'relevance', 'upload_date', 'view_count', 'rating_ascending')
 * @returns {string} The options 'sp' value
 * @throws {Error} If an invalid type or sort is provided
 */
function getSp(type, sort) {
    if (spMapping[type] && spMapping[type][sort]) {
        return spMapping[type][sort];
    } else {
        throw new Error('Invalid type or sort value');
    }
}

module.exports = {
    getSp,
};