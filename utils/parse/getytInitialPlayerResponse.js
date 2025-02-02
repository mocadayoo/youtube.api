const cheerio = require('cheerio');

async function getytInitialPlayerResponse(data, debug=false) {
    try {
        const $ = cheerio.load(data);
        debug && console.debug(`DEBUG | Cheerio init`);

        const scriptTags = $('script');
        let ytInitialPlayerResponse = null;

        debug && console.debug(`DEBUG | Founding ytInitialPlayerResponse...`);
        scriptTags.each((i, tag) => {
            const scriptContent = $(tag).html();
            if (scriptContent && scriptContent.includes('var ytInitialPlayerResponse =')) {
                const match = scriptContent.match(/var ytInitialPlayerResponse = ({.*?});/);
                if (match && match[1]) {
                    try {
                        ytInitialPlayerResponse = JSON.parse(match[1]);
                        debug && console.debug(`DEBUG | Found ytInitialPlayerResponse`);
                    } catch (e) {
                        debug && console.debug(`DEBUG | Error in found ytInitialPlayerResponse | ${e}`);
                        console.error('Error parsing ytInitialPlayerResponse:', e);
                    }
                }
            }
        });

        if (ytInitialPlayerResponse) {
            debug && console.debug(`DEBUG | Success Found ytInitialPlayerResponse`);
            return ytInitialPlayerResponse;
        } else {
            debug && console.debug(`DEBUG | Failed Found ytInitialPlayerResponse`);
            console.log('ytInitialPlayerResponse not found.');
            return "";
        }
    } catch (e) {
        debug && console.debug(`DEBUG | Error in getytInitialPlayerResponse`);
        console.error(e);
    }
};

module.exports = { getytInitialPlayerResponse };