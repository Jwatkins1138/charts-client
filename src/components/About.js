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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <SideBarRight />
      </main>
    </div>    
  ) 
}

export default About;