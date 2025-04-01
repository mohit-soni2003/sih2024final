// CourseDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Telescope, Award, Globe } from 'lucide-react';
import './CourseDetails.css';

const courses = [
  {
    id: 1,
    title: "Careers in Astronomy and Space Science",
    instructor: "This section provides a comprehensive overview of various career opportunities in the fields of astronomy, space science, and related industries. It explores roles ranging from academic research and astrophysics to applied positions in aerospace engineering, data analysis, and space exploration. The content is designed to inspire and guide individuals interested in pursuing a future in these fascinating domains",
    difficulty: "Astronomer roles, space scientists, academic and research opportunities, industry roles (NASA, ISRO, ESA, private companies)",
    modules: [
      {
        id: 1,
        title: "Introduction to Astronomy",
        duration: "45:23",
        videoUrl: "https://www.youtube.com/watch?v=pSHVbLPWA28",
        free: true
      },
      {
        id: 2,
        title: "The Solar System",
        duration: "52:14",
        videoUrl: "https://www.youtube.com/watch?v=_Zc-NE8pmtg",
        free: true
      }
    ]
  }
];

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      setCurrentVideo(foundCourse.modules[0]);
    }
  }, [id]);

  if (!course) {
    return <div className="container">Course not found</div>;
  }

  const instructors = [
    {
      id: 1,
      name: "Dr. Elena Rodriguez",
      specialty: "Planetary Science",
      bio: "NASA research scientist with 15 years of space exploration experience.",
      image: "/images/instructor1.jpg"
    },
    {
      id: 2,
      name: "Prof. Marcus Chen",
      specialty: "Astrophysics",
      bio: "Leading expert in black hole research and cosmic phenomena.",
      image: "/images/instructor2.jpg"
    }
  ];

  return (
    <div className="course-details-container">
      <div className="course-header">
        <h2>{course.title}</h2>
        <p>{course.instructor}</p>
        <p><strong>Key Opportunities:</strong> {course.difficulty}</p>
      </div>

      <div className="instructor-section">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="instructor-card">
            <img src={instructor.image} alt={instructor.name} className="instructor-image" />
            <div className="instructor-details">
              <h3>{instructor.name}</h3>
              <p>{instructor.specialty}</p>
              <p>{instructor.bio}</p>
              <div className="instructor-icons">
                <Telescope size={24} />
                <Award size={24} />
                <Globe size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;