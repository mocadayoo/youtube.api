/**
 * 
 * @param {JSON} data
 * @returns {JSON}
 */
async function analyzeviddata(data) {
    return data.reduce((videos, element) => {
        const videoRenderer = element.videoRenderer;
        if (!videoRenderer) return videos;

        const {
            videoId,
            viewCountText,
            lengthText,
            thumbnail,
            richThumbnail,
            title,
            navigationEndpoint,
            channelThumbnailSupportedRenderers,
            ownerBadges,
            detailedMetadataSnippets
        } = videoRenderer;

        const viewCount = viewCountText?.simpleText?.split(' ')[0]?.replace(/\D/g, '') || '0';
        const videoLength = lengthText?.simpleText || 'Unknown';
        const thumbnails = thumbnail?.thumbnails || [];
        const richThumbnails = richThumbnail?.movingThumbnailRenderer?.movingThumbnailDetails?.thumbnails || [];
        const titleText = title?.runs[0]?.text || 'No Title';
        const url = `https://www.youtube.com${navigationEndpoint?.commandMetadata?.webCommandMetadata?.url}` || '';
        const channelUrl = `https://www.youtube.com/channel/${channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.navigationEndpoint?.browseEndpoint?.browseId || ''}`;
        const channelIcon = channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails[0]?.url || '';
        const badges = ownerBadges

        const description = detailedMetadataSnippets?.[0]?.snippetText?.runs?.map(e => e.text).join('') || '';

        const videoData = {
            video_id: videoId,
            view_count: viewCount,
            video_length: videoLength,
            thumbnails,
            rich_thumbnails: richThumbnails,
            title: titleText,
            description,
            url,
            channel_url: channelUrl,
            channel_icon: channelIcon,
            ...(ownerBadges && { badges: ownerBadges }),
        };

        videos.push(videoData);
        return videos;
    }, []);
}

/**
 * 
 * @param {JSON} data plz input vidserch returend data
 * @param {boolean} analyze true or false(fasle just return contents path)
 * @returns {JSON} returning analyzed Json
 */
async function analyzesearch(data, analyze = true) {
    const contents = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
    
    return analyze ? analyzeviddata(contents) : contents;
}

module.exports = { analyzesearch };