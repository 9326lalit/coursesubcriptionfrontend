
import React, { useState, useEffect } from 'react';
import './Courses.css'; // Importing CSS file

const YourComponent = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/api/getallcourses")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Ensure data has the structure you're expecting
        if (data.success && Array.isArray(data.courses)) {
          setCourses(data.courses); // Set courses data from the API response
        } else {
          throw new Error('Courses data is not in the expected format');
        }
      })
      .catch((error) => {
        setError(error.message);  // Handle any errors
        console.error('There was an error!', error);
      });
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="course-container">
      {error && <p className="error">{error}</p>}
      <h1 className="title">Available Courses</h1>
      <div className="course-list">
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course) => (
            <div className="course-card" key={course._id}>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-price">Price: ₹{course.price}</p>
              <p className="course-category">Category: {course.category}</p>
              {/* Instructor Details */}
              {course.instructor && (
                <div className="instructor-details">
                  <h4>Instructor: {course.instructor.name}</h4>
                  <p>Email: {course.instructor.email}</p>
                </div>
              )}
              <button type='submit'>Explore</button>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
};

export default YourComponent;
