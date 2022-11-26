import Link from 'next/link'

const IndexPage = () => {
  return (
    <main>
      <p>Welcome...</p>
      <p>
        If it is cold (or hot) outside check out the{' '}
        <Link href="/weather-forecast">Weather Forecast</Link>.
      </p>
      <p>
        Wastewater can be a leading indicator for Covid{' '}
        <Link href="/wastewater-covid">Wastewater Covid</Link>.
      </p>
      <p>
        Or veg out with some <Link href="/youtube-channels">Videos</Link>.
      </p>
    </main>
  )
}

export default IndexPage
