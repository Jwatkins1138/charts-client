import Header from './Header'
import SubHeader from './SubHeader'

const Loading = () => {
  return (
    <div className='container'>
      <Header />
      <div className='home'>
        <aside></aside>
        <main className='home-main'>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <h1 id='loading-text'>loading...</h1>
        </main>
        <aside></aside>
      </div>
    </div>
  )
}
export default Loading;