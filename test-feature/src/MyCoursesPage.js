/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard'; 
import SearchBar from './SearchBar';
import StarIcon from '@mui/icons-material/Star';
import './MyCoursePage.css'; 

function MyCoursesPage() {

  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Api fetching
  useEffect(() => {
    // Fetching courses from an API or database
    const dummyCourses = [
      { id: 1, title: 'Introduction to Organic chemistry', instructor: 'Prakash Kapur' , rating: 4},
      { id: 2, title: 'Atomic Structure and Periodicity', instructor: 'John Doe' , rating: 2},
      { id: 3, title: 'Genetics and Heredity', instructor: 'R. Raghav' , rating: 5}
    ];

    setCourses(dummyCourses);
  }, []); 

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="my-courses-page">
      <h1>Browse from enrolled courses</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="course-list">

        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default MyCoursesPage;
