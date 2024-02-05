/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Button, Snackbar, Container, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CourseDetailsPage({ courses }) {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));

    const courseDetails = {
        id: id,
        title: 'Introduction to Organic Chemistry',
        description: 'This course covers the basics of Organic Chemistry...',
        outcomes: [
            'Understand the basic principles of organic chemistry.',
            'Recognize and classify different types of organic compounds.',
            'Analyze and predict chemical reactions involving organic compounds.'
        ],
        chapters: [
            { title: 'Chapter 1: Introduction to Organic Chemistry', subchapters: [{ title: 'Introduction to Organic Compounds', hasVideo: true }, { title: 'Setting Up Structure and Bonding in Organic Molecules', hasPdf: true }] },
            { title: 'Chapter 2: Alkanes and Cycloalkanes', subchapters: [{ title: 'Structure and Nomenclature of Alkanes', hasVideo: true }, { title: 'Physical Properties of Alkanes', hasPdf: true }] },
        ],
        image: './assests/react-logo.png', // Image URL
    };

    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleRate = () => {
        setShowSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    // Calculate total videos and PDFs
    const totalVideos = courseDetails.chapters.reduce((acc, chapter) => acc + chapter.subchapters.filter(subchapter => subchapter.hasVideo).length, 0);
    const totalPDFs = courseDetails.chapters.reduce((acc, chapter) => acc + chapter.subchapters.filter(subchapter => subchapter.hasPdf).length, 0);

    return (
        <Container maxWidth="xl" style={{ margin: '20px auto', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={3} style={{ margin: '0 20px' }}>
                <Grid item xs={12} lg={8}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom>{courseDetails.title}</Typography>
                        <img src={courseDetails.image} alt={courseDetails.title} style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', marginBottom: '16px' }} />
                        <Typography variant="body1" gutterBottom>{courseDetails.description}</Typography>
                        <Button variant="contained" onClick={handleRate} style={{ marginTop: '16px', marginRight: '8px' }}>Rate Course</Button>
                       
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Course Details</Typography>
                            <Typography variant="body1" gutterBottom>Chapters: {courseDetails.chapters.length}</Typography>
                            <Typography variant="body1" gutterBottom>Total Videos: {totalVideos}</Typography>
                            <Typography variant="body1" gutterBottom>Total PDFs: {totalPDFs}</Typography>
                            <Button variant="contained" color="primary" component={Link} to={`/course-details/${id}/chapters/0/subchapters/0`} style={{ marginTop: '16px' }}>Go to Course</Button>
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', pointerEvents: 'none' }}>
                        <Typography variant="h5" gutterBottom>Outcomes:</Typography>
                        <ul>
                            {courseDetails.outcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h5" gutterBottom>Chapters:</Typography>
                        {courseDetails.chapters.map((chapter, index) => (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`chapter${index}-content`}
                                    id={`chapter${index}-header`}
                                >
                                    <Typography variant="h6">{chapter.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        {chapter.subchapters.map((subchapter, subIndex) => (
                                            <li key={subIndex}>
                                                {subchapter.title}
                                                <span>&nbsp;{subchapter.hasPdf ? <PictureAsPdfIcon /> : subchapter.hasVideo ? <PlayCircleOutlineIcon /> : null}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar
                open={showSnackbar}
                autoHideDuration={1000}
                onClose={handleCloseSnackbar}
                message="Thanks for giving a rating!"
            />
        </Container>
    );
}

export default CourseDetailsPage;
