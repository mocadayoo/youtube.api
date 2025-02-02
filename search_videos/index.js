const { getytInitialData, loadCookies } = require('../utils/__init__');
const axios = require('axios');

/**
 * 
 * @param {string} word serching word 
 * @param {JSON} cookies use getcookie after ucan use maked json
 * @param {string} option u can put &sp= after option or use getsp
 * @returns 
 */
async function searchvideos(word, cookies, option, debug=false) {
    let serch_url = `https://www.youtube.com/results?search_query=${encodeURIComponent(word)}`;
    debug && console.debug(`DEBUG | URL Created | ${serch_url}`);

    if (option) {
        serch_url = serch_url + `&sp=${option}`;
        debug && console.debug(`DEBUG | Searching with option | ${option} => ${serch_url}`);
    };

    const cookieString = await loadCookies(cookies);

    const headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US;q=0.8, en;q=0.7",
        "Connection": "keep-alive",
        "Cookie": cookieString,
        "DNT": "1",
        "Host": "www.youtube.com",
        "Priority": "u=0, i",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Sec-GPC": "1",
        "TE": "trailers",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0"
    };

    try {
        const { data, status } = await axios.get(serch_url, headers);
        debug && console.debug(`DEBUG | Fetched URL | ${lastUrl} => ${status}`);

        return await getytInitialData(data, debug);
    } catch (error) {
        debug && console.debug(`DEBUG | Error fetching URL | ${error}`);
        console.error('Error fetching YouTube page:', error);
        return "ERROR";
    }
}

module.exports = { searchvideos };