import Header from './Header'
import SubHeader from './SubHeader'

const Chart = () => {
  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='chart'>
        <aside></aside>
        <div className='chart-main'>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
        </div>
        <aside></aside>
      </main>
    </div>
  )
}
export default Chart;