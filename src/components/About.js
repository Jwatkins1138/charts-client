import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'

const About = () => {
  const breaker = () => {
    const unknown = {};
    console.log(unknown.break.break);
  }

  return (
    <div className='container'>
      <Header />
      <main className='about'>
        <SideBar />
        <div className='about-main'>
          <div className='about-card'>
            <h1>about this site</h1>
            <div className='about-body'>
              <p>Client made with ReactJS and deployed via Heroku, charts are made with ChartJS.</p>
              <p>User functions via dedicated Rails API using Devise / Devise JWT for authentication, also deployed via Heroku.</p>
              <p>Financial data comes from the alphavantage API - free tier so go easy on it.</p>
              <p>2022 Jason Christopher Watkins</p>
              <p>contact me: watkinsjasonc@gmail.com</p>
              <button onClick={breaker}>break test</button>
            </div>
          </div>
        </div>
        <SideBarRight />
      </main>
    </div>    
  ) 
}

export default About;