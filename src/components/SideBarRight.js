import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SideBarRight = (props) => {
  return (
    <aside>
      <div className='side-title'><h5><FontAwesomeIcon icon={faChartSimple} />  chart options</h5></div>
      <div className='side-item'><span>intraday(default)</span></div>
      <div id='TIME_SERIES_DAILY' onCLick={props.changeTime} className='side-item'><span>daily</span></div>
      <div className='side-item'><span>weekly</span></div>
      <div className='side-item'><span>monthly</span></div>
      <div className='side-title'><h5><FontAwesomeIcon icon={faBars} />  other options</h5></div>
      <div className='side-item'><span>sample</span></div>
      <div className='side-item'><span>sample</span></div>
      <div className='side-item'><span>sample</span></div>
      
    </aside>
  )
}

export default SideBarRight;