import React from "react";
import logo from "./profile.png";
import NavBar from "../Components/NavBar.jsx";

function About() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar></NavBar>
        <p>About Us</p>
      </header>
      <div className="Text">
        <p>
          We, the developers of BazaaRU thank you for visiting our site.
          <br />
          <br />
          This website was made for students of Rutgers University to find a way
          to freely communicate and barter goods with each other. <br />
          Our intentions is to have the website serve as both an online
          marketplace and a way to get to know other Rutgers students.
          <br />
          As Rutgers students ourselves, we hope this method of quick trades and
          communication can help students avoid inconveniences such as delivery
          time from companies.
          <br />
          <br />
          We, the developers, hope you all have a great time using our website.
          For any complaints or requests, please use the link on the bottom
          right of the homepage. We would greatly appreciate any feedback so we
          can make this website greater together.
          <br />
          <br />
          Sincerely, Andy, Yousof, Chris, Justyn, Shajia
        </p>
      </div>
    </div>
  );
}

export default About;
