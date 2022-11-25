import { Navbar, NavbarTabs } from '@solenoid/ui'

const availableTabs: NavbarTabs = [
  {
    name: 'Home',
    slug: 'home',
    icon: 'CampgroundSolid',
  },
  {
    name: 'Weather Forecast',
    slug: 'weather-forecast',
    icon: 'CloudSunRainSolid',
  },
  {
    name: 'Wastewater Covid',
    slug: 'wastewater-covid',
    icon: 'PoopSolid',
  },
  {
    name: 'Youtube Channels',
    slug: 'youtube-channels',
    icon: 'Youtube',
  },
]

const IndexPage = () => {
  return (
    <>
      <Navbar tabs={availableTabs} />
      <p>Still figuring out general direction.</p>
      <hr />
    </>
  )
}

export default IndexPage
