import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <main className='home'>
        <SideBar />
        <div className='home-main'>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='fill-bar'></div>
        </div>
        <SideBarRight />
      </main>
    </div>
  )
}
export default Home;