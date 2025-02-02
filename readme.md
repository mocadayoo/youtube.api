# This is Youtube module v1.0

***

### this is <u>Youtube module</u>

***

### <center>Features
- Get cookies
- Searching videos and analyze
- Getting channel info and analyze
- Getting video Info and analyze
</center>

***

### <center>Return example
- Get cookies
<details><summary>cookies.json</summary>

```json
[
  {
    "name": "GPS",
    "value": "1",
    "attributes": {
      "GPS": "1",
      "Domain": ".youtube.com",
      "Expires": "Sun, 02-Feb-2025 11:56:03 GMT",
      "Path": "/"
    }
  },
  {
    "name": "YSC",
    "value": "value",
    "attributes": {
      "YSC": "value",
      "Domain": ".youtube.com",
      "Path": "/",
      "SameSite": "none"
    }
  },
  {
    "name": "VISITOR_INFO1_LIVE",
    "value": "value",
    "attributes": {
      "VISITOR_INFO1_LIVE": "value",
      "Domain": ".youtube.com",
      "Expires": "Fri, 01-Aug-2025 11:26:03 GMT",
      "Path": "/",
      "SameSite": "none"
    }
  },
  {
    "name": "VISITOR_PRIVACY_METADATA",
    "value": "value",
    "attributes": {
      "VISITOR_PRIVACY_METADATA": "value",
      "Domain": ".youtube.com",
      "Expires": "Fri, 01-Aug-2025 11:26:03 GMT",
      "Path": "/",
      "SameSite": "none"
    }
  },
  {
    "name": "__Secure-ROLLOUT_TOKEN",
    "value": "value",
    "attributes": {
      "__Secure-ROLLOUT_TOKEN": "value",
      "Domain": "youtube.com",
      "Expires": "Fri, 01-Aug-2025 11:26:03 GMT",
      "Path": "/",
      "SameSite": "none"
    }
  },
  {
    "name": "PREF",
    "value": "tz=Asia.Tokyo",
    "attributes": {}
  }
]
```
</details>

- videinfo
<details><summary>get.json</summary>

```json
{
  "title": "ダークウェブの住人に喧嘩売ってみた。",
  "description": "ダークウェブの住人に喧嘩を売ってみました。\n\nぜひコメント欄からコミュニティにご参加下さい！\n\nタグ\n#ずんだもん #プログラミング #アングラ #2ch #ハッカー #プログラマー #田代砲 #tiktok #shorts #ショート  #おもしろ #面白い #サスペンス #ホラー #怖い話  #新人\n\n使用させて頂いている音声・効果音・素材\n\n1. Voicebox: ずんだもん\n2. 効果音ラボ\n3. 坂本アヒルさんのずんだもん 立ち絵",
  "viewCount": "155531",
  "likeCount": "8746",
  "commentCount": "212",
  "thumbnails": {
    "default": "https://i.ytimg.com/vi/a39CUxS8XJo/hqdefault.jpg",
    "hq720": "https://i.ytimg.com/vi/a39CUxS8XJo/hq720.jpg",
    "max": "https://i.ytimg.com/vi/a39CUxS8XJo/maxresdefault.jpg"
  },
  "isLive": false
}
```
</details>

- channelinfo
<details><summary>get.json</summary>

```json
{
  "name": "Evex Developers",
  "description": "私たちは日本の開発者コミュニティです。\nしかし、コミュニティメンバーは日本人に限りません。\n誰でも参加できるので、こちらから！！！\nhttps://discord.gg/evex\n\n目標は日本一の開発者コミュニティです！\n\n 検索ワードは「Evex dev」です。\nコミュニティの皆で動画を作っているので、温かい目で見てください！\n\n2025　1月22日 初投稿\n             1月26日 総再生数 10万回突破\n             1月29日 チャンネル登録者 1000人突破\n",
  "followerCount": "チャンネル登録者数 1330人",
  "videoCount": "4 本の動画",
  "live": "",
  "channelUrl": "https://www.youtube.com/channel/UC9-ty5y_CpdYQ6VQKCEr-_Q",
  "avatar": [
    {
      "url": "https://yt3.googleusercontent.com/aKV0QGJcWUIxlZeV7UT5Yt6aFtRUUOT776kFq3bbFJNN-_kEvVxs8SWZHjFhvXTPM70xd3AQhA=s900-c-k-c0x00ffffff-no-rj",
      "width": 900,
      "height": 900
    }
  ],
  "scheduled_streams": []
}
```
</details>

- Searching
<details><summary>get.json</summary>

```json
[
  {
    "video_id": "h4JgC_c4f08",
    "view_count": "2048",
    "video_length": "9:16",
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/h4JgC_c4f08/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDA0b071RHcw2HVxxQ9S1_xeWh6fA",
        "width": 360,
        "height": 202
      },
      {
        "url": "https://i.ytimg.com/vi/h4JgC_c4f08/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDSQEZhqHKR7DnZXYKpJzxiJQP5Kg",
        "width": 720,
        "height": 404
      }
    ],
    "rich_thumbnails": [],
    "title": "【結局】Node.js,deno,bunどれを使えばいいの？",
    "description": "nodejs #deno #bun ITや開発に関するネタやお役立ち情報を発信していきます。 良かったらチャンネル登録お願いします！",
    "url": "https://www.youtube.com/watch?v=h4JgC_c4f08&pp=ygUEZGVubw%3D%3D",
    "channel_url": "https://www.youtube.com/channel/UCQ8iiBr45MDWD7hDp3FDmQg",
    "channel_icon": "https://yt3.ggpht.com/cMPt51ZezzNRRdkCG8XZXPqZFQdNz9Udn6QuudV0T7YFxx1HV1FsDhpazPRxiD0RfIrHfrZQ0Vc=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    "video_id": "Trckhsgr09Y",
    "view_count": "504",
    "video_length": "21:08",
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/Trckhsgr09Y/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBa5BYefLMBQP_t9PHcU5dHjkdvrg",
        "width": 360,
        "height": 202
      },
      {
        "url": "https://i.ytimg.com/vi/Trckhsgr09Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD3QYB-YZIdPP3KIZTHJblrivUOmg",
        "width": 720,
        "height": 404
      }
    ],
    "rich_thumbnails": [],
    "title": "Deno + Fresh で 個人サイトをつくってみた",
    "description": "Deno の Web フレームワークである Fresh で個人サイトをつくりました。 絵を描くのが趣味なフロントエンドエンジニアです。",
    "url": "https://www.youtube.com/watch?v=Trckhsgr09Y&pp=ygUEZGVubw%3D%3D",
    "channel_url": "https://www.youtube.com/channel/UCwoEKcxzNJ_VUW0TPiPfyqw",
    "channel_icon": "https://yt3.ggpht.com/Suc1X7MhOiE8rcHFztDjbNIZPBIaWK_ZsVYO0o0wwmp3AY720rfRDgXIW9TtrWpJSSZZbnt-=s68-c-k-c0x00ffffff-no-rj"
  }
]
```
</details>

***

#### Developed by Moca