const { parseCookie, loadCookies, getytInitialData } = require('../utils/__init__');
const axios = require('axios');
const fs = require('fs')

/**
 * 
 * @param {boolean} isWriteFile true or false (default is true (cookies.json))
 * @returns {Array | JSON} Cookies json (Array in JSON)
 */
async function getcookie(isWriteFile = true, agreeConsent = true, debug = false) {
    const headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ja,en-US;q=0.7,en;q=0.3',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Host': 'www.youtube.com',
        'Priority': 'u=0, i',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Sec-GPC': '1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0'
    };

    let resp;

    try {
        resp = await axios.get('https://www.youtube.com/', { headers });
        debug && console.debug(`DEBUG | Fetched URL | https://www.youtube.com/ => ${resp.status}`);

        let ytipflag = false;

        let cookieJson = [];

        const cookies = resp.headers['set-cookie'];

        if (cookies) {
            debug && console.debug(`DEBUG | set-cookie Header Found`);
            cookieJson = await parseCookie(cookies, debug);
            cookieJson.push({
                'name': 'PREF',
                'value': 'tz=Asia.Tokyo',
                'attributes': {},
            });

            const visitorInfoCookie = cookieJson.find(cookie => cookie.name === 'VISITOR_INFO1_LIVE');
            if (!visitorInfoCookie) {
                debug && console.debug(`DEBUG | Cookie consent screen required`);
                ytipflag = true;
            }

            if (ytipflag) {
                const ytInitial = await getytInitialData(resp.data, debug);

                const agree_consnet_url = ytInitial?.topbar?.desktopTopbarRenderer?.interstitial?.consentBumpV2Renderer?.agreeButton.buttonRenderer?.command?.saveConsentAction?.savePreferenceUrl; // agree consnet
                const deny_consnet_url = ytInitial?.topbar?.desktopTopbarRenderer?.interstitial?.consentBumpV2Renderer?.disableP13nButton?.buttonRenderer?.command?.disablePersonalizationAction?.savePreferenceUrl; // deny consent

                debug && console.debug(`DEBUG | Processing Cookie consent with | ALL CONSENT`);
                const cookieString = await loadCookies(cookieJson);

                const header = {
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br, zstd',
                    'Accept-Language': 'ja,en-US;q=0.7,en;q=0.3',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                    'Content-type': 'text/plain',
                    'Cookie': cookieString,
                    'DNT': '1',
                    'Host': 'consent.youtube.com',
                    'Origin': 'https://www.youtube.com',
                    'Pragma': 'no-cache',
                    'Referer': 'https://www.youtube.com/',
                    'Priority': 'u=0',
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'same-site',
                    'Sec-GPC': '1',
                    'Upgrade-Insecure-Requests': '1',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0'
                };

                const pl = {
                    themeRefresh: 1
                }

                debug && console.debug('DEBUG | GAMING');
                if (agreeConsent) {
                    resp = await axios.post(agree_consnet_url, { headers: header }, pl);
                } else if (!agreeCOnsent) {
                    resp = await axios.post(deny_consnet_url, { headers: header }, pl);
                }
                debug && console.debug(`DEBUG | Fetched URL | https://consent.youtube.com/save?... => ${resp.status}`);
                const newCookies = resp.headers['set-cookie'];

                if (newCookies) {
                    const newCookieJson = await parseCookie(newCookies, debug);
                    cookieJson = [...cookieJson, ...newCookieJson];
                }
            }

            if (isWriteFile) {
                fs.writeFileSync('cookies.json', JSON.stringify(cookieJson, null, 2));
            }

            debug && console.debug(`DEBUG | Success Get Cookies`);
            return cookieJson;
        } else {
            debug && console.debug(`DEBUG | Failed Get Cookies`);
            console.log('No cookies found.');
            return null;
        }
    } catch (error) {
        debug && console.debug(`DEBUG | Errored in Get Cookies | ${error}`);
        console.error('Error:', error.message);
        return 'ERROR';
    }
}

module.exports = { getcookie };