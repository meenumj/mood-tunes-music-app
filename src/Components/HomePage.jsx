import React from 'react'
import './HomePage.css'
import { FaBars } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaMusic } from "react-icons/fa";


const HomePage = () => {
  return (
    <body className='home-page'>
      <section id='nav-bar'>
      <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#"><img src='https://yt3.googleusercontent.com/fbMZWmMgDXCKOw8qqJmpiQstqXLc-_jczRUHIXTSovZrfoAf5W1vpjnnfQaBUZf1_BKxBAh34Q=s900-c-k-c0x00ffffff-no-rj'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars className='fa-bars'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
        <li className="nav-item">
          <a className="nav-link" href="#top">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">TESTIMONIALS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#social-media">CONTACT</a>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">SIGNIN</Link>
        </li>
      </ul>
    </div>
</nav>
      </section>
    

    {/*-------------Banner Section----------------*/}

    <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className='promo-title'>MOOD TUNES MUSIC HUB</p>
                    <p style={{textAlign:"justify"}}>Welcome to "MoodTunes Music Hub"......... We offers a dynamic music experience tailored to your emotions. Explore our emotion-driven playlist, curated to uplift spirits, soothe souls, or energize days. Additionally, generate personalized melodies with our music generation feature, transforming your words into unique compositions. Unlock the power of music to match and enhance your mood like never before!!!<FaMusic /><FaMusic /></p>
                     {/* <a href="#"><img src="images/play.png" alt="Play button" className="play-btn" />Listen</a>  */}
                </div>
                <div className="col-md-6 text-center">
                    <img src="images/Project.jpg" className='img-fluid' style={{ height: '350px', width:"70%" }} />
                </div>
            </div>
        </div>

        <img src="images/wave1.png" className='bottom-img' />
    </section>

    {/* ------Services Section-------- */}

    <section id="services">
      <div className="container text-center">
        <h1 className='title'>WHAT WE DO ?</h1>
        <div className="row text-center">
          <div className="col-md-6 services">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*yWYCiphwCr7eDAQxyhIheg.png" className='service-img'/>
            <h4>Music Playlist</h4>
            <p style={{textAlign:"justify"}}>Discover our emotion-driven music playlist! Whether you seek to lift your mood, find comfort in reflective tunes, or boost your energy with lively beats, our handpicked selection caters to diverse emotions.</p>
          </div>
          <div className="col-md-6 services">
            <img src="https://viso.ai/wp-content/uploads/2023/12/ai-music-generation-concept.jpg" className='service-img'/>
            <h4>Music Generation</h4>
            <p style={{textAlign:"justify"}}>Transform your words into melodies with us. Simply input a description or mood, click generate, and listen to your personalized composition come to life. Enhance your creativity and unlock endless musical possibilities.</p>
          </div>
        </div>
      </div>
    </section>


    {/* About Us */}

    <section id="about-us"> 
    <div className="container">
    <h1 className='title text-center'>WHY CHOOSE US ?</h1>
    <div className="row">
      <div className="col-md-6 about-us">
        <p className='about-title'>Why we're different</p>
        <ul style={{textAlign:"justify"}}>
          <li>Unlike traditional playlists, we focus on curating music that resonates with specific emotions, ensuring each song contributes to a cohesive and meaningful listening experience.</li>
          <li>Our innovative music generation feature sets us apart, allowing users to create personalized compositions from text inputs. Experience the magic of AI as it transforms words into melodies.</li>
          <li>We prioritize the security of user information by implementing encryption methods, ensuring that personal data remains safe and confidential.</li>
        </ul>
      </div>
      <div className="col-md-6">
        <img src="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024" className="img-fluid" />
      </div>
    </div>
    </div>
    </section>


{/* Testmonials Sections */}



<section id='testimonials'>
  <div className="container">
  <h1 className='title text-center'>WHAT USERS SAY</h1>
  <div className="row offset-1">
    <div className="col-md-5 testimonials">
      <p style={{textAlign:"justify"}}> MoodTunes Music Hub has completely transformed my music listening experience! The curated playlists cater perfectly to my mood, whether I need a pick-me-up or some relaxation. I love how the platform offers such a diverse range of music genres and styles. It's my go-to destination for discovering new music and rediscovering old favorites.
      </p>
      <img src="images/user1.jpg"  />
      <p className='user-details'><b>Angelina Joe</b></p>
    </div>
    <div className="col-md-5 testimonials">
      <p style={{textAlign:"justify"}}> MoodTunes Music Hub has become an essential tool in my journey as a musician. The AI-powered music generation feature is mind-blowing! I've been able to experiment with different musical ideas and create compositions I never thought possible. This platform is a game-changer for anyone looking to explore their musical creativity.
      </p>
      <img src="images/user2.jpg"  />
      <p className='user-details'><b>Jacob John</b></p>
    </div>
  </div>
  </div>
</section>

{/* ------------Social Media--------- */}

<section id='social-media'>
<div className="container text-center">
  <p>FIND US ON SOCIAL MEDIA</p>
  <div className="social-icons">
    <a href="#"><img src="images/facebook-icon.png"  /></a>
    <a href="#"><img src="images/instagram-icon.png"  /></a>
    <a href="#"><img src="images/twitter-icon.png"  /></a>
    <a href="#"><img src="images/whatsapp-icon.png"  /></a>
    <a href="#"><img src="images/linkedin-icon.png"  /></a>
    <a href="#"><img src="images/snapchat-icon.png"  /></a>
</div>
</div>
</section>


{/* ----------------Footer Section------------------- */}


<section id='footer'>
  <img src="images/wave2.png" className='footer-img' />
<div className="container">
  <div className="row">
    <div className="col-md-4 footer-box">
      <img src="https://yt3.googleusercontent.com/fbMZWmMgDXCKOw8qqJmpiQstqXLc-_jczRUHIXTSovZrfoAf5W1vpjnnfQaBUZf1_BKxBAh34Q=s900-c-k-c0x00ffffff-no-rj"  />
      <br /><br /><p>Share feedback with us!!!!</p>
    </div>
    <div className="col-md-4 footer-box">
      <p><b>CONTACT US</b></p>
      <p><IoLocation  className='fa-bars-footer'/> Federal Institute of Science and Technology, Angamaly</p>
      <p><FaPhoneAlt  className='fa-bars-footer'/>  +91 9961228702</p>
      <p>< MdOutlineMail className='fa-bars-footer'/>  meenu167999@gmail.com</p>
    </div>
    <div className="col-md-4 footer-box">
      <p><b>SUBSCRIBE NEWSLETTER</b></p>
      <input type="email" className='form-control' placeholder='Your Email' />
      <button type="button" className='btn btn-primary'>Subscribe</button>
    </div>
  </div>
  <hr />
  <p className='copyright'>Website Created by Meenu Joseph</p>
</div>
</section>


{/* -----------Smooth Scroll----------------- */}
    <script src="smooth-scroll.js"></script>
    <script>
	  var scroll = new SmoothScroll('a[href*="#"]');
    </script>
    </body>
  )
}


export default HomePage
