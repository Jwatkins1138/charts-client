import Header from './Header'
import SubHeader from './SubHeader'

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <div className='home'>
        <aside></aside>
        <main className='home-main'>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='fill-bar'></div>
        </main>
        <aside></aside>
      </div>
    </div>
  )
}
export default Home;