import React from 'react'
import './UserHome.css'
import { FaBars } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';

const UserHome = () => {
  return (
    <div>
      <body classNameName='user-home'>
      <section id='nav-bar'>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">MoodTunes Music Hub</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Change Password</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Share Feedback</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="btn btn-outline-light" to="/login">Logout</Link>
                        </li>
                    </ul>
                        </div>
                    </div>
                    </nav>
            </section>

            <section id="carousel-home">

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h4>MOOD TUNES MUSIC HUB</h4>
        <p>"Elevate Your Mood, Create Your Music..."</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://w0.peakpx.com/wallpaper/698/121/HD-wallpaper-love-of-music-profile-purple-girl-ear-phones-colours-face.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h4>MOOD TUNES MUSIC HUB</h4>
        <p>"Elevate Your Mood, Create Your Music..."</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://miro.medium.com/v2/resize:fit:1024/1*7nfPh9_1gHVt4NLExC0HQA.png" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h4>MOOD TUNES MUSIC HUB</h4>
        <p>"Elevate Your Mood, Create Your Music..."</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
    </section>

    {/* ------Services Section-------- */}

    <section id="services">
      <div className="container text-center">
        <h1 className='title'>EXPLORE HERE</h1>
        <div className="row text-center">
          <div className="col-md-6 services">
            <img src="https://www.billboard.com/wp-content/uploads/media/music-listening-illustration-2019-billboard-1548.jpg?w=942&h=623&crop=1" className='service-img'/>
            <h4>Music Playlist</h4>
            <p>Listen to songs and elevate your mood</p>
            <a className="btn btn-outline-light" href="#">Listen</a>
          </div>
          <div className="col-md-6 services">
            <img src="https://macleans.ca/wp-content/uploads/2015/12/best-of-music1.jpg" className='service-img'/>
            <h4>Music Generation</h4>
            <p>Create your music from text</p>
            <a className="btn btn-outline-light" href="http://localhost:8501">Generate</a>
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

      </body>
    </div>
  )
}

export default UserHome
