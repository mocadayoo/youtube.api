async function parseCookie(cookies, debug=false) {
    const cookieJson = cookies
    .map(cookie => {
        const cookieParts = cookie.split(';');

        const keyValuePairs = cookieParts.map(part => {
            const [key, value] = part.split('=');
            return { key: key.trim(), value: value ? value.trim() : null };
        });

        const nameValuePair = keyValuePairs.find(pair => pair.key !== 'Domain' && pair.key !== 'Path' && pair.key !== 'Expires' && pair.key !== 'Secure' && pair.key !== 'HttpOnly' && pair.key !== 'SameSite');

        if (!nameValuePair) {
            return null;
        }

        const cookieObj = {
            name: nameValuePair.key,
            value: nameValuePair.value,
            attributes: {}
        };

        keyValuePairs.forEach(pair => {
            if (pair.key !== 'name' && pair.key !== 'value' && pair.value !== null) {
                cookieObj.attributes[pair.key] = pair.value;
            }
        });

        debug && console.debug(`DEBUG | Cookie Found | ${cookieObj.name} => ${cookieObj.value}`);
        return cookieObj;
    })
    .filter(cookie => cookie !== null && cookie?.value);

    return cookieJson;
}

module.exports = { parseCookie }