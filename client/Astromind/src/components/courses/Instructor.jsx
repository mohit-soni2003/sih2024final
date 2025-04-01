// Instructors.jsx
import React from 'react';
import { Telescope, Award, Globe } from 'lucide-react';
import './Instructors.css';

function Instructors() {
  const instructors = [
    { 
      id: 1,
      name: "Dr. Elena Rodriguez",
      specialty: "Planetary Science",
      bio: "NASA research scientist with 15 years of space exploration experience.",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Prof. Marcus Chen",
      specialty: "Astrophysics",
      bio: "Leading expert in black hole research and cosmic phenomena.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="instructors-container">
      <h1 className="title">Our Space Experts</h1>
      
      <div className="instructors-grid">
        {instructors.map(instructor => (
          <div 
            key={instructor.id} 
            className="instructor-card"
          >
            <img 
              src={instructor.image} 
              alt={instructor.name} 
              className="instructor-image"
            />
            <div className="instructor-details">
              <h3 className="instructor-name">{instructor.name}</h3>
              <p className="instructor-specialty">{instructor.specialty}</p>
              <p className="instructor-bio">{instructor.bio}</p>
              <div className="icons">
                <Telescope size={24} className="icon telescope" />
                <Award size={24} className="icon award" />
                <Globe size={24} className="icon globe" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;