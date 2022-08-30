import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'

const Loading = () => {
  return (
    <div className='container'>
      <Header />
      <div className='home'>
        <SideBar />
        <main className='home-main'>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <h1 id='loading-text'>loading...</h1>
        </main>
        <SideBarRight />
      </div>
    </div>
  )
}
export default Loading;