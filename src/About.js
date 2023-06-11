import React from 'react';
import './AboutUs.css';
import './App.css'
const About = () => {
  return (
    <div className="about-us-container">
      <h2 id="animation">About Us</h2>
      <p>Welcome to our weather application! We are a passionate team of weather enthusiasts dedicated to providing you with reliable and accurate weather information.</p>
      <p>Our mission is to empower you to make informed decisions based on the weather conditions. Whether you're planning outdoor activities, traveling, or simply curious about the forecast, our app has got you covered.</p>
      <h2>What is PWA?</h2>
      <p>A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

Like a website, a PWA can run on multiple platforms and devices from a single codebase. Like a platform-specific app, it can be installed on the device, can operate while offline and in the background, and can integrate with the device and with other installed apps.</p>
      <h3>Features</h3>
      <ul>
        <li>Current weather conditions for your location</li>
        <li>Multi-day weather forecast</li>
        <li>Search functionality to find weather for any location</li>
        <li>Detailed information including temperature, humidity, wind speed, and more</li>
      </ul>
      
      <h3>Our Data</h3>
      <p>We source our weather data from trusted providers, ensuring high-quality and up-to-date information. Our data includes accurate forecasts, radar maps, and historical weather patterns.</p>
      
      <h3>Contact Us</h3>
      <p>We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to our team. We are here to assist you and continuously improve our application.</p>
   
      
      <h3>Enjoy Exploring!</h3>
      <p>Thank you for using our weather application. We hope it provides you with the information you need to plan your day and stay prepared for any weather conditions. Enjoy exploring the world of weather with us!</p>
    </div>
  );
};

export default About;
