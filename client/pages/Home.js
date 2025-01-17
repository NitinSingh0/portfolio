import React from "react";

const Home = () => (
  <section className="home">
    <h1>Hi, I'm Nitin Singh</h1>
    <p>Tech Enthusiast | Developer | Problem Solver</p>
    <button onClick={() => (window.location.href = "/contact")}>
      Contact Me
    </button>
  </section>
);

export default Home;
