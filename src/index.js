import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GeoAltFill, TelephoneFill   } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons'
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
import myImage from './aakk.jpg';
import cricketimg from './earning.png';
import carimg from './car.png';
import gameimg from './learnings.png';
import Typed from 'typed.js';

import { FaWordpress } from 'react-icons/fa'; 
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { BiController } from 'react-icons/bi';

import { faFacebook, faWhatsapp, faYoutube, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';



import MultiHeadline from './multiheadline'



function Hi(){

  const submithandler = async (e) => {
    e.preventDefault()
    console.log("result" , result)
  }
   return <div>
    <main className="container">
       <nav className="navbar">
        <div className="nav-left">
        <span>
          <a href="#"><GeoAltFill/> </a>
          </span>
          <h3>AREA  <br /><span> Sector 5/F House No 13 Block 8 New Karachi  </span></h3> 
          
        </div>

         <div className="nav-right">
         <ul className="contact">
            <li>
              <a href="tel:+03142135944"><TelephoneFill /></a>
              <h3>Phone  <br /><span>0314-2135944</span></h3>
            </li>
            <li>
              <a href="mailto:qabdullah245@gmail.com"><Icon.EnvelopeFill /></a>
              <h3>Email  <br /><span>qabdullah245@gmail.com</span></h3>
            </li>
           <li className='git'>
           <a href="https://github.com/Qazi-Abdullah"><Icon.Github /></a>
           <h3>Github <br /> <span>Qazi-Abdullah</span></h3>
           </li>
          </ul>
         </div>
       </nav>

       {/* profile section  */}
       <section className="profile">
        <div className="profile-img">
            <img src={myImage} alt="" />
            <div className="overlay"></div>
        </div>
        <div className="profile-content">
            <h1>QAZI<br/> <b> ABDULLAH</b></h1>
            <hr />
        
            <MultiHeadline />
            <p>Lorem ipsum dolor sit amet consectetur adipisicin. Assumenda sapiente   soluta  maxime voluptatibus  Lorem ipsum dolor sit amet consectetur adipisicing  Non consequuntur eos placeat.  repellat libero?</p>
        </div>
       </section>

       {/* details  */}
       <section className="details">
        <div className="detail-left">
            {/* education  */}
            <div className="education">
                <h2>EDUCATION</h2>
              <hr />
             <li><h4><b>Matric</b> Biology</h4>
             <span>New Era Academy </span></li>
             <li><h4><b>Intermediate</b> : Pre-Medical</h4>
             <span>Gov.Degree Boys College 5-L New Karachi</span></li>
            </div>

            {/* skil */}
            <div className="skill">
                <h2>SKILLS</h2>
                <hr />
                <div className="skill">
                <span>
                 <b> Front-end <br />
                  technology </b>
            </span>
                <p>HTML5, CSS3, Tailwind CSS, JavaScript and ReactJS</p>
              </div>
              <div className="skill">
                <span><b>
                  Back-end <br />
                  technology</b>
                </span>
                <p>NodeJS, ExpressJS and JWT</p>
              </div>
              <div className="skill">
                <span><b>Database</b></span>
                <p>MongoDB, Firebase and Pinecone</p>
              </div>
            </div>

            {/* hobbies */}
            <div className="hobbies">
                <h2>HOBBIES</h2>
                <hr />
                <div className="hobbi-name">

                <li> <img src={cricketimg} alt="" />
                <span>Earning</span></li>
                <li> <img src={carimg} alt="" />
                  <span>Traveling</span></li>
                <li> <img src={gameimg} alt="" /> 
                <span>Learning</span></li>
                </div>
            
            </div>
            
       <div className="social-media">
    <h2>SOCIAL MEDIA</h2>
    <hr />
    <div className="social-icons">
  <div className="icon">
    <a href="https://www.facebook.com/smerty.abdullah">
      <FontAwesomeIcon icon={faFacebook} />
      <span><b>Facebook</b></span>
    </a>
  </div>


  <div className="social-icons">
  <div className="icon">
    <a href="https://api.whatsapp.com/send?phone=03142135944">
      <FontAwesomeIcon icon={faWhatsapp} />
      <span><b>WhatsApp</b></span>
    </a>
  </div>
</div>
<div className="social-icons">
  <div className="icon">
    <a href="https://www.youtube.com/user/your-channel-username">
      <FontAwesomeIcon icon={faYoutube} />
      <span><b>YouTube</b></span>
    </a>
  </div>
</div>


        <div className="social-icons">
  <div className="icon">
    <a href="https://www.linkedin.com/in/your-profile-url">
      <FontAwesomeIcon icon={faLinkedin} />
      <span><b>LinkedIn</b></span>
    </a>
  </div>
</div>

<div className="social-icons">
  <div className="icon">
    <a href="https://www.instagram.com/your-username">
      <FontAwesomeIcon icon={faInstagram} />
      <span><b>Instagram</b></span>
    </a>
  </div>
</div>

<div className="social-icons">
  <div className="icon">
    <a href="https://github.com/your-Qazi-Abdullah">
      <FontAwesomeIcon icon={faGithub} />
      <span><b>GitHub</b></span>
    </a>
  </div>
</div>

    </div>
</div>
        </div>

        {/* right sec  */}
        <div className="detail-right">
            
            <div className="about">
                <h2>About</h2>
                <hr />
                <p>I am Qazi Abdullajh. A passionate individual with a strong interest in Frontend Development. I believe in the power of clean and efficient code to create exceptional user experiences. My skills and dedication drive me to constantly improve and innovate.</p>
            </div>

            {/* experience  */}
            <div className="expi">
                <h2>Experience</h2>
                <hr />
                <li><b>Frontend Development: </b> <span>I have 9 months of experience in web development.</span></li>
                <li><b>Coater : </b><span>I have Regent Lab 2 Years of Experience. </span></li>
                <li><b>Pharmcy : </b><span>I have Map Medical 2 Years of Experience. </span></li>

            </div>

            {/* expert */}
            <div className="expert">
                <h2>Experties</h2>
                <hr />
                <div className="expert-i">

    
                <li>
                  <a className='wrdpres' href="#"><  FaWordpress /></a><br />
                  <h3>WordPress</h3>
               </li>
               <li>
            <a href="#">
              <FontAwesomeIcon  icon={faCode} /> <br />
            </a>
            <h3>Web Development</h3>
          </li>
          <li>
          <a href="#">
            <FontAwesomeIcon  icon={faPaintBrush} /><br />
          </a>
          <h3>Design</h3>
        </li>
                </div>
       </div>
       <div className="submit-form">
    <h2>Contact Me</h2>
    <hr />
    <h4>Feel free to reach out to me.</h4>
    <p>Have any questions? Send me a message.</p>
    <form>
        <div className="form-group">
            <label>Name:</label>
            <input type="text" />
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" />
        </div>
        <div className="form-group">
            <label>Message:</label>
            <textarea></textarea>
        </div>
        <button className='btn' type="submithandler">Submit</button>
    </form>
</div>

        </div>

       </section>




    </main>

    </div>
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));