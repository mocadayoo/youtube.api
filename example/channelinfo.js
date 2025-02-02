const { channelinfo, analyzechannel } = require('./youtubemodule/__init__');
const fs = require('fs')

async function main() {
    const cookies = await getcookie(); // first ucan option cookie consent deny or true { agreeConsent=false true }

    // const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8')); // after getcookie

    const data = await channelinfo('https://www.youtube.com/@evex-developers', cookies); // return ytInitialData u can put in short video too

    const info = await analyzechannel(data); // return parsed data

    await fs.writeFileSync('get.json', JSON.stringify(info, null, 2)); // write result
}

main()