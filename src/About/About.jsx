import React from "react";
import "./about.css";
import CountUp from "react-countup";
import Footer from "./footer";
const About = () => {
  
  return (
    <>
      <section className="About-wrapper">
        <div className="paddings innerWidth flexCenter About-container">
          <div className=" flexColStart About-left">
            <div className="About-title">
              <div className="circle" />
              <div className="f-circle" />
              <div className="s-circle" />

              <h1>
                Find your <br /> paw-perfect
                <br />
                friend
              </h1>
            </div>
            <div className="count">
              <p>#AdoptLove campaign</p>
            </div>
            <div className="flexColStart About-desc">
              <span>Gift a home to the cutest paws of your choice.</span>
              <span>Bring home your tail-trail partner.</span>
            </div>
          </div>
          <div className=" flexCenter About-right">
            <div className="image-container">
              <img src="./dog-png-22667.png" alt="cute doggo img"></img>
            </div>
          </div>
        </div>
        <p className="welcome">Welcome to AdoptADoggo - Where Tails Find Their Happily Ever After!

At AdoptADoggo, we believe that every dog deserves a loving home. Our mission is to match these wonderful animals with caring families who will provide them with the love and care they deserve. Whether you're looking for a loyal companion, an energetic playmate, or a cuddly friend, you'll find your perfect match right here.</p>
        <h2>Trusted By Users:</h2>
        <div className="stats">
          <div className="stat">
            <span>
              <CountUp start={1000} end={9000} duration={2.75} />
              <span>+</span>
            </span>
            <p class="text">pets adopted</p>
          </div>
          <div className="stat">
            <span>
              <CountUp start={1000} end={6000} duration={2.75} />
              <span>+</span>
            </span>
            <p class="text"> paw-tnerships</p>
          </div>
          <div className="stat">
            <span>
              <CountUp start={100} end={1000} duration={4} />
              <span>+</span>
            </span>
            <p class="text"> Lives Connected</p>
          </div>
          <div></div>
        
        <div className="why">Why Adopt from Us?</div>
        <div className="why_det">
          <ul>

<li><b>Lovingly Vetted Dogs:</b> All our dogs are thoroughly vetted, vaccinated, and spayed/neutered to ensure they're healthy and ready to join their new families.
</li>
<li><b>Personalized Matchmaking:</b> Our experienced staff take the time to understand your lifestyle and preferences, matching you with a dog that fits seamlessly into your home and heart.
</li>
<li><b>Ongoing Support</b>: We're here for you every step of the way, offering support and guidance even after the adoption process is complete.
       </li></ul></div></div>
      </section>
      
      <Footer />
    </>
  );
};
export default About;
