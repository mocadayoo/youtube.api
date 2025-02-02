const { getcookie, searchvideos, analyzesearch, getSp  } = require('./youtubemodule/__init__');

const fs = require('fs')

async function main() {
    const cookies = await getcookie(); // first ucan option cookie consent deny or true { agreeConsent=false true }

    // const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8')); // after getcookie

    // const data = await vidserch('cocomelon', cookies);
    const data = await searchvideos('cocomelon', cookies, getSp('video', 'upload_date')); // serch sorting
    
    const videosinfo = await analyzesearch(data);

    fs.writeFileSync('get.json', JSON.stringify(videosinfo, null, 2)); // write result to json
}

main();