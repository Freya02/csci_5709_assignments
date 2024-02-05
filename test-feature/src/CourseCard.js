import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

import './CourseCard.css'; 

function CourseCard({ course }) {
  return (
    <Card className="course-card">
      <CardMedia
        component="img"
        height="23"
        image={course.image} 
        alt={course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Instructor: {course.instructor}
        </Typography>
        <div className="rating">
          {Array.from({ length: course.rating }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <Button component={Link} to={`/course-details/${course.id}`} className="btn" variant="contained">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired 
  }).isRequired
};

export default CourseCard;
