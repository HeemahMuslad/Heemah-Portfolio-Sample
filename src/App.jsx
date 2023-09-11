/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Social from "./Components/Social";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Rohimat Mustapha",
  title: "Front-End Web Developer & Graphic Designer",
  email: "rohimatmustapha7@gmail.com",
  gitHub: "https://github.com/HeemahMuslad",
  linkedIn: "https://www.linkedin.com/in/rohimat-mustapha-4187171b4",
  medium: "https://medium.com/@rohimatmustapha7",
  twitter: "https://twitter.com/heemahmuslad?t=fNUSfDpthvsEZtodEI763g&s=09",
  youTube: "https://www.youtube.com/channel/UCJEl5I7B6E-2SycZC-CV3Aw?app=desktop",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

<Education />
<Experience />
<Skills />
<Social />


const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
