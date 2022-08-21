import Header from './Header'

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
          <h1 id='loading-text'>loading...</h1>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
          <div className='home-bar'></div>
        </main>
        <aside></aside>
      </div>
    </div>
  )
}
export default Loading;