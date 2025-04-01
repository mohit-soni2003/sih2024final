// Courses.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const courses = [
  {
    id: 1,
    title: "Careers in Astronomy and Space Science",
    instructor: "An overview of different career opportunities in astronomy, space science, and related industries.",
    cover: "/images/Careers in Astronomy and Space Science.jpg",
  },
  {
    id: 2,
    title: "Building a Career in Astrophysics",
    instructor: "Focus on career paths in astrophysics, research, and academic opportunities.",
    cover: "/images/Public Outreach and Science Communication in Space.jpg",
  },
  {
    id: 3,
    title: "Space Engineering Careers",
    instructor: "Career opportunities in the design and development of spacecraft, satellites, and space technology",
    cover: "/images/Careers in Astronomy and Space Science.jpg",
  },
  {
    id: 4,
    title: "Careers in Space Policy and International Space Law",
    instructor: "Explore career paths in space law, policy, and international space cooperation.",
    cover: "/images/Public Outreach and Science Communication in Space.jpg",
  },
  {
    id: 5,
    title: "Astronomical Data Science and Computational Astronomy Careers",
    instructor: "Careers in computational astronomy, data analysis, and working with large datasets from space missions.",
    cover: "/images/Careers in Astronomy and Space Science.jpg",
  },
  {
    id: 6,
    title: "Satellite Communication and Networking Careers",
    instructor: "Roles in satellite communication, networking, and broadcasting.",
    cover: "/images/Public Outreach and Science Communication in Space.jpg",
  },
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="courses-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="What's Your Interest..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
              className="course-image"
            />
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-instructor">{course.instructor}</p>
              <div className="course-meta">
                <span className="course-rating">
                  <Star size={14} className="icon" />
                  {course.rating || 'N/A'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;