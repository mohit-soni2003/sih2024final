import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Book, Users } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home-screen">
      <div className="home-container">
        <h1 className="home-title">Explore the Universe from Home</h1>
        <p className="home-description">
          Learn astronomy, space science, and cosmic mysteries with AstroMinds - 
          Your gateway to understanding the universe.
        </p>

        <div className="home-grid">
          {[
            {
              icon: <Rocket size={48} className="icon" />,
              title: "Space Courses",
              link: "/courses",
              buttonClass: "button-blue",
            },
            {
              icon: <Book size={48} className="icon" />,
              title: "Learn Astronomy",
              link: "/about",
              buttonClass: "button-green",
            },
            {
              icon: <Users size={48} className="icon" />,
              title: "Meet Experts",
              link: "/instructors",
              buttonClass: "button-purple",
            },
          ].map((item, index) => (
            <div key={index} className="card">
              {item.icon}
              <h3 className="card-title">{item.title}</h3>
              <Link to={item.link} className={`button ${item.buttonClass}`}>
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
