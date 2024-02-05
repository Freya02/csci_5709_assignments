import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MyCoursesPage from './MyCoursesPage';
import CourseDetailsPage from './CourseDetailsPage';
import ChapterDetailsPage from './ChapterDetailsPage'; 



import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const username = "Freya";

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setNavOpen(false);
  };

// Api fetching
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetching courses from an API or database
    const dummyCourses = [
      { id: 1, title: 'Introduction to Organic Chemistry', instructor: 'Prakash Kapur' , rating: 4},
      { id: 2, title: 'Atomic Structure and Periodicity', instructor: 'John Doe' , rating: 2},
      { id: 3, title: 'Genetics and Heredity', instructor: 'R. Raghav' , rating: 5}
    ];

    setCourses(dummyCourses);
  }, []);

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleNav}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={navOpen}
          onClose={() => setNavOpen(false)}
        >
          <List>
          <ListItem
          button
          component={Link}
          to="/profile">
              <Avatar src={require('./assets/profile-pic.jpg')} alt="Profile" />
              <ListItemText primary={`Hi ${username}`} />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/my-courses"
              onClick={() => handleOptionClick("My Courses")}
            >
              <ListItemText primary="My Courses" />
            </ListItem>
          </List>
        </Drawer>
        <div className="content">
          <Routes>
            <Route path="/my-courses" element={<MyCoursesPage courses={courses} />} />
            <Route path="/course-details/:id" element={<CourseDetailsPage courses={courses} />} />
            <Route path="/course-details/:courseId/chapters/:chapterId/subchapters/:subchapterId" element={<ChapterDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
