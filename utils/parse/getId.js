/**
 * 
 * @param {string} url Youtube video Url or Id
 * @returns {string} Youtube Video Id(parsed)
 */
async function getId(url, debug = false) {
    debug && console.debug(`DEBUG | getId called with | ${url}`);

    try {
        if (url.includes('https://') || url.includes('http://') || url.includes('watch?v=')) {
            if (url.includes('shorts')) {
                const Id = url.split('/')[4];
                debug && console.debug(`DEBUG | Detected Youtube Shorts URL | ${Id}`);
                return Id;
            } else if (url.includes('youtu.be')) {
                const Id = url.split('/')[2].substring(0, 11);
                debug && console.debug(`DEBUG | Detected youtu.be type Url | ${Id}`);
                return Id;
            } else if (url.includes('youtube') || url.includes('watch?v=')) {
                const Id = url.split('watch?v=')[1].substring(0, 11);
                debug && console.debug(`DEBUG | Detected Nomal Youtube URL | ${Id}`);
                return Id;
            }
        } else if (url.length === 11) {
            debug && console.debug(`DEBUG | Detected Youtube Video Id | ${url}`);
            return url;
        } else {
            debug && console.debug(`DEBUG | Error in getId | ${url}`);
            return 'NOT VIDEO';
        };
    } catch (e) {
        return 'NOT VIDEO';
    };
};

module.exports = { getId }