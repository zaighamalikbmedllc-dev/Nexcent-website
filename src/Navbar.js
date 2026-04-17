import React, { useRef, useState } from "react";
import "./App.css";
import "./navbar.css";
import Icon from "./Icon.png";
import Illustration from "./Illustration.png";
import Logo from "./Logo 1.png";
import L2 from "./L2.png";
import Lo3 from "./Lo3.png";
import Lg4 from "./Lg4.png";
import Le5 from "./Le5.png";
import Eg from "./Eg.png";
import m7 from "./m7.png";
import Member from "./Member.png";
import Me from "./Me.png";
import M from "./M.png";
import rafiki from "./rafiki.png";
import back from "./back.png"
import sa from "./sa.png";
import za3 from "./za3.png";
import za from "./za.png";
import ge from "./ge.png";
import im from "./im.png";
import ma from "./ma.png";
import Counts from "./Counts.png"
const companyLinks = ["About Us", "Blog", "Contact us", "Pricing", "Testimonials"];
const supportLinks = ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"];

function SocialIcon({ label, children }) {
  return (
    <button type="button" className="social-link" aria-label={label}>
      {children}
    </button>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="/#">{link}</a>
          </li>
        ))}
      </ul>
    </div>   
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h2 className="footer-logo">
          <img src={Icon} alt="Nexcent logo" className="logo-img" />
          Nexcent
        </h2>
        <p>Copyright © 2026 Nexcent ltd.</p>
        <p>All rights reserved</p>
        <div className="social-links">
          <SocialIcon label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.2" cy="6.8" r="1" className="filled-icon" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Dribbble">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="8" />
              <path d="M7 8.2c3.6 1.1 6.5 4.4 7.9 8.8" />
              <path d="M18.9 9.3c-3.8-.3-7.8.5-11.3 2.5" />
              <path d="M6.9 15.7c3.9-1.4 7.8-1.5 10.9-.6" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Twitter">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 7.3c-.5.2-1 .4-1.6.5.6-.4 1-.9 1.2-1.6-.6.4-1.2.6-1.9.8a3 3 0 0 0-5.2 2v.4A8.5 8.5 0 0 1 5.4 6.5a3 3 0 0 0 .9 4 3 3 0 0 1-1.4-.4c0 1.5 1 2.7 2.4 3a3 3 0 0 1-1.4.1 3 3 0 0 0 2.8 2 6 6 0 0 1-3.8 1.3h-.7a8.5 8.5 0 0 0 13.1-7.4v-.4c.6-.4 1.1-.9 1.5-1.4Z" className="filled-icon" />
            </svg>
          </SocialIcon>
          <SocialIcon label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4.5" y="7" width="15" height="10" rx="3" />
              <path d="M10 9.5 15 12l-5 2.5Z" className="filled-icon" />
            </svg>
          </SocialIcon>
        </div>
      </div>
      <div className="footer-links">
        <FooterLinkColumn title="Company" links={companyLinks} />
        <FooterLinkColumn title="Support" links={supportLinks} />
      </div>
      <div className="footer-subscribe">
        <h3>Stay up to date</h3>
        <form className="subscribe-form">
          <input type="email" placeholder="Your email address" aria-label="Your email address" />
          <button type="submit" aria-label="Submit email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 4 10 15" />
              <path d="m21 4-7 16-4-7-7-4Z" />
            </svg>
          </button>
        </form>
      </div>
    </footer>
  );
}




function Navbar({ scrollToSection, openLogin, openSignup }) {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <img src={Icon} alt="Logo" className="logo-img" />
        Nexcent
      </h2>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("service")}>Service</li>
        <li onClick={() => scrollToSection("feature")}>Feature</li>
        <li onClick={() => scrollToSection("product")}>Product</li>
       
        <li onClick={() => scrollToSection("faq")}>FAQ</li>
      </ul>

      <div className="auth-buttons">
        <button className="login" onClick={openLogin}>Login</button>
        <button className="signup" onClick={openSignup}>Sign Up</button>
      </div>
    </nav>
  );
}

function Slider() {
  const slides = [
    {
      title: "Lessons and insights from 8 years",
      text: "Where to grow your business as a photographer: site or social media?",
    },
    {
      title: "Grow your business smarter",
      text: "Use modern tools and platforms to scale faster.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="hero">
        <div className="hero-text">
          <h1>
            {slides[current].title.split("from")[0]} <br />
            <span>from 8 years</span>
          </h1>
          <p>{slides[current].text}</p>
          <button className="hero-btn">Register</button>
        </div>
        <div className="hero-image">
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>

      <div className="slider-buttons">
        <button onClick={prevSlide}>⬅</button>
        <button onClick={nextSlide}>➡</button>
      </div>
    </div>
  );
}

function Section({ sectionRef, children, className = "section" }) {
  return (
    <section ref={sectionRef} className={className}>
      {children ? children : <></>}
    </section>
  );
}

function App() {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const featureRef = useRef(null);
  const productRef = useRef(null);
  
  const faqRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [signupData, setSignupData] = useState({
  name: "",
  email: "",
  password: "",
});




const [loginData, setLoginData] = useState({
  email: "",
  password: "",
});

 
  

  const scrollToSection = (section) => {
    const map = {
      home: homeRef,
      service: serviceRef,
      feature: featureRef,
      product: productRef,
     
      faq: faqRef,
    };

    map[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        openLogin={() => {
          setShowLogin(true);
          setShowSignup(false);
        }}
        openSignup={() => {
          setShowSignup(true);
          setShowLogin(false);
        }}
      />

      <Slider />

      
      
      {showLogin && (
        <div className="form-overlay">
          <div className="form-box">
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <button
              className="form-btn"
              onClick={() => {
                const Users = JSON.parse(localStorage.getItem("users"))|| [];

                const founduser = Users.find(
                (u) =>
                   u.email === loginData.email &&
                   u.password === loginData.password

                );

                if (founduser)
                
                 {

                  alert("Login successful!");
                  setShowLogin(false);
                } else {
                  alert("Invalid email or password");
                }
              }}
            >
              Login
            </button>

            <p onClick={() => setShowLogin(false)}>Close</p>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="form-overlay">
          <div className="form-box">
            <h2>Sign Up</h2>

            <input
              type="text"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />

            <button
              className="form-btn"


              onClick={() => {


                     const oldUsers = JSON.parse(localStorage.getItem("users")) || [];

                    const updatedUsers = [...oldUsers, signupData];

                localStorage.setItem("users", JSON.stringify(updatedUsers));

                alert("Signup successful!");
              setSignupData({
              name: "",
               email: "",
                password: ""
  }); // 👈 RESET FORM

  setShowSignup(false);
}}
            >
              Sign Up
            </button>

            <p onClick={() => setShowSignup(false)}>Close</p>
          </div>
        </div>
      )}

      <Section sectionRef={homeRef} className="home">

        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <br />
        <br />
        <div className="logo-row">
          <img src={Logo} alt="Logo" className="Logo" />
          <img src={L2} alt="Logo 2" className="Logo" />
          <img src={Lo3} alt="Logo 3" className="Logo" />
          <img src={Lg4} alt="Logo 4" className="Logo" />
          <img src={Le5} alt="Logo 5" className="Logo" />
          <img src={Eg} alt="Logo 6" className="Logo" />
          <img src={m7} alt="Logo 7" className="Logo" />
        </div>
        <br />
        <br />
        <br />
        <h2 className="h2">
          Manage your entire community <br />
          in a single system
        </h2>
        
        <div className="container">
          <div className="card">
            <img src={Member} alt="Member" />
            Our membership management software provides full automation of
            membership renewals and payments
          </div>
          <div className="card">
            <img src={Me} alt="Me" />
            Our membership management software provides full automation of
            membership renewals and payments
          </div>
          <div className="card">
            <img src={M} alt="M" />
            Our membership management software provides full automation of
            membership renewals and payments
          </div>
        </div>
      </Section>

      <Section sectionRef={serviceRef}>
        <br />
        <div className="p">
          <h1>
            The unseen of spending three
            <br /> year sat Pixelgrade
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>

        <br />
        <img src={rafiki} alt="rafiki" className="im" />
        <br />
        <br />

        <button className="btn">Learn More</button>

       
       <div className="dd">
    <h1 className="d2">
      Helping Local Businesses
      <br />
      <span>Reinvent Themselves</span>
    </h1>
    <div className="stats-grid">
     
      
          <img src={Counts} alt="" className="stat-card"/>
          
    
   
    </div>
</div>
      </Section>

      <Section sectionRef={featureRef} >


<img src={back} alt="back.png" className="ba" />

<h1 className="ss">How to design your site footer like <br/>we did</h1>
<h4 className="h4">Donec a eros justo. Fusce egestas tristique ultrices.
                  Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, 
                <br/>at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                 In hac habitasse platea dictumst. Vivamus vehicula <br/>leo dui,at porta nisi facilisis finibus.
                 In euismod augue vitae nisi ultricies,non aliquet urna tincidunt. Integer in nisi eget nulla <br/>commodo 
                efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                  Donec consectetur faucibus <br/>
                 ipsum id gravida..</h4>

<button className="bt">Learn More</button>
  <img src={sa} alt="Customer success story" className="sa"/>
 <div className="div">
    
         <h5 className="par">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
         vel rutrum risus<br/> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique
         quam in, gravida<br/> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie<br/> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique
         nulla sodales. Suspendisse<br/> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque
        malesuada enim sapien,<br/> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur
        libero condimentum<br/> id.Curabitur id nibh id sem dignissim finibus ac sit amet magna.</h5>
        <br/><h3 className="he">TIM SMITH</h3>
  

  <div className="feature-logos">
  <div className="logo-low">
    <img src={za3} alt="Logo 1" />
    <img src={L2} alt="Logo 2" />
    <img src={Lo3} alt="Logo 3" />
    <img src={Lg4} alt="Logo 4" />
    <img src={Le5} alt="Logo 5" />
    <img src={za} alt="Logo 6" />
  
  <h3 className="meet-heading">
    Meet all customers <span className="arrow">→</span>
  </h3>
  </div>
</div>
 
</div>

        </Section>


      <Section sectionRef={productRef} >

  <h1 className="hhhh">Caring is the new marketing</h1>
  <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

<div className="image">
  <img src={ge} alt="Safeguarding article" className="ge" />
    <img src={im} alt="Membership model article" className="ge"/>
    <img src={ma} alt="Community responsibilities article" className="ge" />


<div className="con">

          <div className="c">
          
           Creating Streamlined Safeguarding Processes with OneRen 
           <br/> <button className="read-more-btn">
      Readmore <span className="arrow">→</span>
    </button>
          </div>
          <div className="c">
            
           Revamping the Membership Model with Triathlon Australia
     <br/> <button className="read-more-btn">
      Readmore <span className="arrow">→</span>
     </button>
          </div>
          <div className="c">
           
          <h5>What are your safeguarding responsibilities and how can you manage them? </h5> 
          <button className="read-more-btn">
      Readmore <span className="arrow">→</span>
    </button>
          </div>
        </div>
    
</div>

    
        </Section>

     

      <Section sectionRef={faqRef} className="section footer-section">
  <div className="clo" >   
<h1 className="go">Pellentesque suscipit <br/>fringilla libero eu.</h1>
<button className="boo">Get a Demo → </button>
</div>
<SiteFooter />
           </Section>
    </div>
  );
}

export default App; 
