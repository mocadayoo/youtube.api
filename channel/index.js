const { getytInitialPlayerResponse, getytInitialData, loadCookies, getId }= require('../utils/__init__');
const axios = require('axios');
const fs = require('fs');

function isYouTubeChannel(url) {
    const regex = /^https?:\/\/(www\.)?youtube\.com\/(channel\/UC[\w-]{21}[AQgw]|(c\/|user\/)?[\w@一-龯ぁ-んァ-ヴー々〆〤-]+)$/;
    return regex.test(url);
}

/**
 * 
 * @param {string} url Youtube channel URL
 * @param {Array | JSON} cookies  use getcookie after ucan use maked json
 * @returns {JSON}
 */
async function channelinfo(url, cookies, debug=false) {
    if (!isYouTubeChannel(url)) return 'NOT CHANNEL';

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
        const lastUrl = url;

        const { data, status } = await axios.get(lastUrl, headers);
        debug && console.debug(`DEBUG | Fetched URL | ${lastUrl} => ${status}`);

        return await getytInitialData(data, debug);
    } catch (error) {
        debug && console.debug(`DEBUG | Error fetching URL | ${error}`);
        console.error('Error fetching YouTube page:', error);
        return "ERROR";
    };
};

module.exports = { channelinfo };