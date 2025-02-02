const cheerio = require('cheerio');

async function getytInitialData(data, debug=false) {
    try {
        const $ = cheerio.load(data);
        debug && console.debug(`DEBUG | Cheerio init`);

        const scriptTags = $('script');
        let ytInitialData = null;

        debug && console.debug(`DEBUG | Founding ytInitialData...`);
        scriptTags.each((i, tag) => {
            const scriptContent = $(tag).html();
            if (scriptContent && scriptContent.includes('var ytInitialData =')) {
                const match = scriptContent.match(/var ytInitialData = ({.*?});/);
                if (match && match[1]) {
                    try {
                        ytInitialData = JSON.parse(match[1]);
                        debug && console.debug(`DEBUG | Found ytInitialData`);
                    } catch (e) {
                        debug && console.debug(`DEBUG | Error in found ytInitialData | ${e}`);
                        console.error('Error parsing ytInitialData:', e);
                    }
                }
            }
        });

        if (ytInitialData) {
            debug && console.debug(`DEBUG | Success Found ytInitialData`);
            return ytInitialData;
        } else {
            debug && console.debug(`DEBUG | Failed Found ytInitialData`);
            console.log('ytInitialData not found.');
            return "";
        }
    } catch (e) {
        debug && console.debug(`DEBUG | Error in getytInitialData`);
        console.error(e);
    }
};

module.exports = { getytInitialData };