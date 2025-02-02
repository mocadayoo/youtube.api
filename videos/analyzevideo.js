const { getId } = require('../utils/__init__');

/**
 * 
 * @param {JSON} data plz input use vidinfo data
 * @returns {JSON}
 */
async function analyzevideo(data) {
    const Content = data.contents.twoColumnWatchNextResults.results.results.contents;
    const engagementPanels = data.engagementPanels

    let viewCount;

    let isLive = Content[0]?.videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer?.isLive;
    if (isLive && isLive === true) {
        isLive = true;
        viewCount = Content[0]?.videoPrimaryInfoRenderer?.viewCount?.videoViewCountRenderer?.viewCount?.runs[0].text.replace(/\D/g, '') || 0;
    } else if (!isLive || isLive === false) {
        isLive = false;
        viewCount = Content[0]?.videoPrimaryInfoRenderer?.viewCount?.videoViewCountRenderer?.viewCount?.simpleText.split(' ')[0].replace(/\D/g, '') || 0;
    };

    const title = Content[0]?.videoPrimaryInfoRenderer?.title?.runs[0]?.text || '';
    const description = Content[1]?.videoSecondaryInfoRenderer?.attributedDescription?.content || '';
    const likeCount = Content[0]?.videoPrimaryInfoRenderer?.videoActions?.menuRenderer?.topLevelButtons[0]?.segmentedLikeDislikeButtonViewModel?.likeButtonViewModel?.likeButtonViewModel?.toggleButtonViewModel?.toggleButtonViewModel?.defaultButtonViewModel?.buttonViewModel?.title || 0;
    const commentCount = engagementPanels[0]?.engagementPanelSectionListRenderer?.header?.engagementPanelTitleHeaderRenderer?.contextualInfo?.runs[0]?.text || 0;
    const url = data?.currentVideoEndpoint.commandMetadata.webCommandMetadata.url;
    const Id = await getId(url);

    const thumbnails = {
        default: `https://i.ytimg.com/vi/${Id}/hqdefault.jpg`,
        hq720: `https://i.ytimg.com/vi/${Id}/hq720.jpg`,
        max: `https://i.ytimg.com/vi/${Id}/maxresdefault.jpg`
    };

    return {
        title,
        description,
        viewCount,
        likeCount,
        commentCount,
        thumbnails,
        isLive,
    };
}

module.exports = { analyzevideo }