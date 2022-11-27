// TODO get this channels list from somewhere else
const channels = ['UCvjgXvBlbQiydffZU7m1_aw']
// TODO figure out URL prefix concerns to reference the APIs for this app
const channelFetcher = async (id: string) =>
  fetch(`http://localhost:3030/api/feeds/videos.json?channel_id=${id}`).then(
    (r) => r.json()
  )

const getAllChannels = async () => Promise.all(channels.map(channelFetcher))
// TODO consider having these be somewhat media query aware
const divisor = 6
const majorGap = 8
const minorGap = 2
type Entry = any
const Page = async () => {
  let allChannels: Array<Entry> = await getAllChannels()
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: majorGap }}>
      {allChannels.map((channel) => {
        return (
          <div key={`channel-${channel.uri}`}>
            <h3>{channel.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: minorGap }}>
              {channel.entries.map((video: any) => {
                return (
                  <a
                    target="vids"
                    href={video.href}
                    title={video.title}
                    style={{
                      display: 'block',
                      width: video.width / divisor,
                      textDecoration: 'none',
                    }}
                  >
                    <img
                      src={video.src}
                      width={video.width / divisor}
                      height={video.height / divisor}
                      alt={video.title}
                    />
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
