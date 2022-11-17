import React from 'react'
import logo from './/assets/logo.png'
import hero from './/assets/scketch-banner.png'
import innovation from './/assets/Digital_build_01.png'
import optimization from './/assets/Digital_refresh_02.png'
import design from './/assets/Design.png'
import development from './/assets/Developments.png'
import marketing from './/assets/marketing-1.png'
import consulting from './/assets/Consulting.png'
import ecommerce from './/assets/Buddha800x450-1.png'
import finance from './/assets/UF-1.png'
import noq from './/assets/NoQ.png'
import panchatantra from './/assets/Panchatantra.png'
import foxpers from './/assets/Foxpers.png'
import sckarlett from './/assets/Alexa-2.png'
import players from './/assets/Players_App.png'
import indialends from './/assets/indialends.png'
import sckarlettvideo from './/assets/Scarlett_image_800x437-02-1.png'
import matias from './/assets/matias.png'
import uflogo from './/assets/uflogo.png'
import ravi from './/assets/Ravi.png'
import eganeshalogo from './/assets/eganeshalogo.png'
import pravalika from './/assets/pravalika.png'
import noqlogo from './/assets/NoQlogo.png'
import gautham from './/assets/Gautham.png'
import foxperslogo from './/assets/foxpersLogo.png'
import rama from './/assets/rama.png'
import panchatantralogo from './/assets/Panchatantralogo.png'
import discuss from './/assets/start_project_img_03-1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'




function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Offerings />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

function Header(){
  return(
    <div className='header'>
    <img className="scketch-logo" src={logo} alt='logoofscketch' />
    <nav>
      <ul className='nav-list' >
        <li className='nav-list-item' >Services</li>
        <li className='nav-list-item' >About Us</li>
        <li className='nav-list-item' >Portfolio</li>
        <li className='nav-list-item' >Blog</li>
        <li className='nav-list-item' >Careers</li>
        <li className='nav-list-item' >Contact</li>
      </ul>
    </nav>
    </div>
  )
}

function Hero(){
  return(
    <div className='hero'>
    <img src={hero} alt='heroimage'/>
    <h1 className='heading-light'>A Creative Studio that</h1>
    <h1 className='heading'>Thinks Design</h1>
    </div>
  )
}

function Offerings(){
  return(
    <div className='offerings'>
    <h2>Our Offerings</h2>

    <div className='digial'>

    <div className='offering'>
    <img className="offering-pic" src={innovation} alt='computer'/>
    <div className='offering-conent'>
    <h3 className='offering-sub-heading'>Digital Build: Innovation</h3>
    <p className='offering-para'>Through the Digital Build process, we build your digital assets from scratch and develop your embryonic ideas into a robust brand.</p>
    </div>
    </div>
    
    <div className='offering'>
    <div className='offering-conent'>
    <h3 className='offering-sub-heading'>Digital Refresh: Optimization</h3>
    <p className='offering-para'>We equip you to always be at the top of your game by building your digital presence across newer platforms like IoT, wearables, voice and gesture based interactions.</p>
    </div>
    <img className="offering-pic" src={optimization} alt='building'/>
    </div>

    </div>

    <div className='offering-categories'>

    <div>
    <img src={design} alt='scketch'/>
    <p>Design</p>
    </div>

    <div>
    <img src={development} alt='code'/>
    <p>Development</p>
    </div>

    <div>
    <img src={marketing} alt='speaker'/>
    <p>Digital Marketing</p>
    </div>

    <div>
    <img src={consulting} alt='human'/>
    <p>Digital Consulting</p>
    </div>

    </div>

    </div>
  )
}


function Portfolio(){
  return(
    <div className='portfolio'>

    <h2>Work Portfolio</h2>

    <div className='grid'>
    <div>
    <img className='buddha' src={ecommerce} alt='buddha'/>
    </div>

    <div>
    <img className='grid-second' src={finance} alt='finance'/>
    <img className='grid-second' src={noq} alt='noq'/>
    <img className='grid-second' src={panchatantra} alt='panchatantra'/>
    <img className='grid-second' src={foxpers} alt='foxpers'/>
    </div>

    <div>
    <img src={sckarlett} alt='sckarlett'/>
    <img src={players} alt='players'/>
    <img src={indialends} alt='indialends'/>
    </div>

    <div>
    <a href="https://www.youtube.com/embed/wflVtim9Dqo" target='_blank' rel="noreferrer">
    <img src={sckarlettvideo} alt='sckarlett-video'/>
    </a>
    </div>

    </div>

    </div>
  )
}

function Testimonials(){
  return(

    <div>
    <div className='testimonials'>

    <h2>Testimonials</h2>


    <div>
    <img src={matias} alt='united-finance-client'/>
    <p>Our collaboration with Scketch has been absolutely stunning, and their product delivery management is done with utmost professionalism and precision.</p>
    <img src={uflogo} alt='united-finance-logo'/>
    </div>

    <div>
    <img src={ravi} alt='eganesha-client'/>
    <p>Scketch is undoubtedly a great find for us. The team understood our requirement and vision comprehensively, and were able to execute it very well. Being a start-up, our requirements were dynamic. Scketch gave us a deep insight on the digital marketing solutions that were instrumental for us.</p>
    <img src={eganeshalogo} alt='eganesha-logo'/>
    </div>

    <div>
    <img src={pravalika} alt='noq-client'/>
    <p>Our experience working with Scketch Logo design team was perfect. We are completely satisfied with their efforts and results for our product logo. I would definitely recommend Scketch.</p>
    <img src={noqlogo} alt='noq-logo'/>
    </div>

    <div>
    <img src={gautham} alt='foxpers-client'/>
    <p>Our experience with Scketch has been incredible. We were impressed by their ability to thoroughly understand us and deliver a mobile app that’s user friendly and technically innovative. For their great adaptability skills and commitment to go an extra mile, we recommend Scketch.</p>
    <img src={foxperslogo} alt='foxpers-logo'/>
    </div>

    <div>
    <img src={rama} alt='panchatantra-client'/>
    <p>Scketch delivered a unique combination of creative approach and innovative design. They have impressed us with their ability to transform a budding idea into a completely evolved project. We are really happy that we collaborated with a team which consistently exceed your expectations. They immerse themselves completely to get you an unmatched brand identity.</p>
    <img src={panchatantralogo} alt='panchatantra-logo'/>
    </div>

    </div>

    <div className='discussion'>
      <img src={discuss} alt='discuss' />
      <div className='discussion-content'>
      <h2 className='discussion-heading'>Let's Discuss Your Project</h2>
      <p className='discussion-para'>Choose an ideal tech partner who can turn your idea into a tech solution</p>
      <button>Start</button>
      </div>
    </div>

    </div>
  )
}


function Footer(){
  return(
    <div className='footer'>

    <div className='footer-icons'>
    <a href='https://www.facebook.com/scketchdigital/' target='_blank' rel="noreferrer"><FaFacebook /></a>
    <a href='https://twitter.com/ScketchDigital?lang=en' target='_blank' rel="noreferrer"><FaTwitter /></a>
    <a href='https://www.instagram.com/scketch_digital/' target='_blank' rel="noreferrer"><FaInstagram /></a>
    <a href='https://www.linkedin.com/company/scketch/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
    </div>

    <div>
    <ul className='footer-navigation' >
        <a href='https://www.scketch.com/services/' target='_blank' rel="noreferrer"><li className='nav-list-item' >Services</li></a>
        <a href='https://www.scketch.com/about/' target='_blank' rel="noreferrer"><li className='nav-list-item' >About Us</li></a>
        <a href='https://www.scketch.com/covid-19/' target='_blank' rel="noreferrer"><li className='nav-list-item' >Insights</li></a>
        <a href='https://www.scketch.com/portfolio/' target='_blank' rel="noreferrer"><li className='nav-list-item' >Portfolio</li></a>
        <a href='https://www.scketch.com/contact/' target='_blank' rel="noreferrer"><li className='nav-list-item' >Contact</li></a>
      </ul>
    </div>

    <div>
      <p>Made by a Scketcher</p>
      <p>All Rights Reserved</p>
    </div>
    
    </div>
  )
}












export default App;
