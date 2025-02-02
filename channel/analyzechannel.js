/**
 * 
 * @param {JSON} data plz input use channelinfo data
 * @returns {JSON}
 */
async function analyzechannel(data) {
    const name = data.metadata?.channelMetadataRenderer?.title || 'No Name';
    const description = data.metadata?.channelMetadataRenderer?.description || 'No Description';
    const followerCount = data.header?.pageHeaderRenderer?.content?.pageHeaderViewModel?.metadata?.contentMetadataViewModel?.metadataRows[1]?.metadataParts[0]?.text?.content || 'No Follower Count';
    const videoCount = data.header?.pageHeaderRenderer?.content?.pageHeaderViewModel?.metadata?.contentMetadataViewModel?.metadataRows[1]?.metadataParts[1]?.text?.content || 'No Video Count';
    const liveData = data.header?.pageHeaderRenderer?.content?.pageHeaderViewModel?.image?.decoratedAvatarViewModel?.rendererContext?.commandContext?.onTap?.innertubeCommand?.commandMetadata?.webCommandMetadata?.url;
    const live = liveData ? `https://youtube.com${liveData}` : '';
    const channelUrl = data.metadata?.channelMetadataRenderer?.channelUrl || 'No Channel URL';
    const avatar = data.metadata?.channelMetadataRenderer?.avatar?.thumbnails || 'No Avatar URL';
    const contents = data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer?.contents

    const scheduled_stream_rootVe = 3611;
    let scheduled_streams = [];
    contents.forEach(element => {
        const rootVe = element.itemSectionRenderer?.contents[0]?.shelfRenderer?.title?.runs[0]?.navigationEndpoint?.commandMetadata?.webCommandMetadata?.rootVe
        if (rootVe === scheduled_stream_rootVe) {
            const items = element?.itemSectionRenderer?.contents[0]?.shelfRenderer?.content?.horizontalListRenderer?.items;
            if (items) {
                items.forEach(el => {
                    const gridVideoRenderer = el.gridVideoRenderer;
                    const upcomingDate = gridVideoRenderer?.upcomingEventData?.startTime;
                    if (!upcomingDate) return;
                    const title = gridVideoRenderer?.title?.simpleText;
                    const videoId = gridVideoRenderer?.videoId;
                    const thumbnails = gridVideoRenderer?.thumbnail?.thumbnails;
                    const waiting_count = gridVideoRenderer?.viewCountText?.runs[0]?.text;
                    const url = 'https://youtube.com' + gridVideoRenderer?.navigationEndpoint?.commandMetadata?.webCommandMetadata?.url;

                    scheduled_streams.push({
                        title,
                        videoId,
                        thumbnails,
                        waiting_count,
                        url,
                        upcomingDate,
                    });
                });
            }
        };
    });

    //?.itemSectionRenderer?.contents[0]?.shelfRenderer?.content?.horizontalListRenderer?.items;


    return {
        name,
        description,
        followerCount,
        videoCount,
        live,
        channelUrl,
        avatar,
        scheduled_streams
    };
}

module.exports = { analyzechannel }