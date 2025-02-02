const { getytInitialPlayerResponse, getytInitialData, loadCookies, getId }= require('../utils/__init__');
const axios = require('axios');
const fs = require('fs');

/**
 * 
 * @param {string} url Youtube video Id or Url
 * @param {Array | JSON} cookies  use getcookie after ucan use maked json
 * @returns {JSON}
 */
async function videoinfo(url, cookies, debug=false) {
    const Id = await getId(url, debug);

    if (Id === 'NOT VIDEO') {
        return 'NOT VIDEO';
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
        const lastUrl = `https://www.youtube.com/watch?v=${Id}`;
        debug && console.debug(`DEBUG | URL Created | ${lastUrl}`);

        const { data, status } = await axios.get(lastUrl, headers);
        debug && console.debug(`DEBUG | Fetched URL | ${lastUrl} => ${status}`);

        return await getytInitialData(data, debug);
    } catch (error) {
        debug && console.debug(`DEBUG | Error fetching URL | ${error}`);
        console.error('Error fetching YouTube page:', error);
        return "ERROR";
    };
};

async function videoplayerinfo(url, cookies, debug=false) {
    const Id = await getId(url, debug);

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
        const lastUrl = `https://www.youtube.com/watch?v=${Id}`;
        debug && console.debug(`DEBUG | URL Created | ${lastUrl}`);

        const { data, status } = await axios.get(lastUrl, headers);
        debug && console.debug(`DEBUG | Fetched URL | ${lastUrl} => ${status}`);

        return await getytInitialPlayerResponse(data, debug);
    } catch (error) {
        debug && console.debug(`DEBUG | Error fetching URL | ${error}`);
        console.error('Error fetching YouTube page:', error);
        return "ERROR";
    };
};

module.exports = { videoplayerinfo, videoinfo };