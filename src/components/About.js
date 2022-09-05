import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'

const About = () => {
  return (
    <div className='container'>
      <Header />
      <main className='about'>
        <SideBar />
        <div className='about-main'>
          <div className='about-card'>
            <h1>about this site</h1>
            <div className='about-body'>
              <p>2022 Jason Christopher Watkins</p>
              <p>contact me: watkinsjasonc@gmail.com</p>
            </div>
          </div>
        </div>
        <SideBarRight />
      </main>
    </div>    
  ) 
}

export default About;