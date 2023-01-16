const channels = ['UCvjgXvBlbQiydffZU7m1_aw']
// TODO figure out URL prefix concerns to reference the APIs for this app
const SITE = 'http://localhost:9001/'
const API_ENDPOINT = `${SITE}api/feeds/videos.json`
const channelFetcher = async (id: string) =>
  fetch(`${API_ENDPOINT}?channel_id=${id}`).then((r) => r.json())

const getAllChannels = async () => Promise.all(channels.map(channelFetcher))
// TODO consider having these be somewhat media query aware
const divisor = 6
const majorGap = 8
const minorGap = 2
type Entry = any
// const Page = () => {
//   // put 'use client' at the top when trying this out
//   const allChannels: Array<Entry> = use(getAllChannels())
const Page = async () => {
  const allChannels: Array<Entry> = await getAllChannels()
  // TODO consider putting meta into head once the api settles for that
  // see https://beta.nextjs.org/docs/api-reference/file-conventions/head
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: majorGap }}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {allChannels.map((channel) => {
        return (
          <div key={`channel-${channel.uri}`}>
            <h3>{channel.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: minorGap }}>
              {channel.entries.map((video: any) => {
                return (
                  <a
                    target="vids"
                    key={video.href}
                    href={video.href}
                    title={video.title}
                    style={{
                      display: 'block',
                      width: video.width / divisor,
                      textDecoration: 'none',
                    }}
                  >
                    <picture>
                      <img
                        src={video.src}
                        width={video.width / divisor}
                        height={video.height / divisor}
                        alt={video.title}
                      />
                    </picture>
                    <div className="one-line-box">
                      {video.month}/{video.day}
                      <span style={{ fontSize: 10 }}> {video.title}</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Page
