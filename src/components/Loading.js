import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'

const Loading = () => {
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
          <h1 id='loading-text'>loading...</h1>
        </div>
        <SideBarRight />
      </main>
    </div>
  )
}
export default Loading;