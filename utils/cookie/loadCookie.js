async function loadCookies(cookies) {
    const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    return cookieString;
}

module.exports = { loadCookies }