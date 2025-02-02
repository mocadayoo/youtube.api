const { videoinfo, analyzevideo } = require('./youtubemodule/__init__');
const fs = require('fs')

async function main() {
    const cookies = await getcookie(); // first ucan option cookie consent deny or true { agreeConsent=false true }

    // const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8')); // after getcookie

    const data = await videoinfo('https://www.youtube.com/watch?v=Y6Ybz_yjQ6U', cookies); // return ytInitialData u can put in short video too

    const info = await analyzevideo(data); // return parsed data

    await fs.writeFileSync('get.json', JSON.stringify(info, null, 2)); // write result
}

main()