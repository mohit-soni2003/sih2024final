// Courses.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const courses = [
    {
       id: 1,
       title: "Introduction to Astronomy",
       instructor: "Dr. Elena Rodriguez",
       price: 49.99,
       free: false,
       difficulty: "Beginner",
       rating: 4.7,
       lectures: 24,
       category: "Beginner",
       cover: "/images/orbits.jpg"
     },
     {
       id: 2,
       title: "Understanding solar system and the planets ",
       instructor: "Dr. Rama dixit",
       price: 9.99,
       free: false,
       difficulty: "Beginner",
       rating: 4.1,
       lectures: 9,
       category: "Beginner",
       cover: "/images/planetary science and exploration.jpg"
     },
     {
       id: 3,
       title: "Understanding Rockets and Satellites",
       instructor: "Dr. Rajlaxmi",
       price: 4.99,
       free: false,
       difficulty: "Beginner",
       rating: 3.9,
       lectures: 15,
       category: "Beginner",
       cover: "/images/rockets and the satellites.jpg"
     },{
       id: 4,
       title: "Space for Everyday Life",
       instructor: "Dr. Venugopal",
       price: 49.00,
       free: false,
       difficulty: "Beginner",
       rating: 3.7,
       lectures: 12,
       category: "Beginner",
       cover: "/images/solar system.png"
     },{
       id: 5,
       title: "Spacecraft Design and Engineering",
       instructor: "Dr. D. karthik",
       price: 7.99,
       free: false,
       difficulty: "Advanced",
       rating:4.8,
       lectures: 18,
       category: "Advanced",
       cover: "/images/space tech.png"
     },{
       id: 6,
       title: "Planetary Science and Exploration",
       instructor: "Dr. Raj mathur",
       price: 3.99,
       free: false,
       difficulty: "Advanced",
       rating: 4.6,
       lectures: 21,
       category: "Advanced",
       cover: "/images/space and the everyday life.jpg"
     }
   
   ];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || course.category === filter)
  );

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="courses-container">
      <div className="filter-bar">
        <input 
          type="text" 
          placeholder="Search Space Courses..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="course-card"
            onClick={() => handleCourseClick(course.id)}
          >
            <img 
              src={course.cover} 
              alt={course.title} 
              className="course-cover"
            />
            <div className="course-details">
              <h3 className="course-title">{course.title}</h3>
              <div className="course-meta">
                <span className="course-instructor">{course.instructor}</span>
                <span className={
                  course.free ? 'course-price free' : 'course-price'
                }>
                  {course.free ? 'FREE' : `$${course.price}`}
                </span>
              </div>
              <div className="course-stats">
                <span><Star size={14} className="icon" />{course.rating}</span>
                <span>{course.lectures} Lectures</span>
                <span>{course.difficulty}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;