import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ChapterDetailsPage() {
    const params = useParams();
    const { title } = params;
    const decodedTitle = decodeURIComponent(title);

    const youtubeVideoUrl = "https://www.youtube.com/embed/B_ketdzJtY8?si=XgS3yZh7Cg7KX2sF";

    const courseDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet lorem non justo consequat, sed elementum enim faucibus.";

    const chapters = [
        { id: 1, title: "Chapter 1: Introduction to Organic Chemistry", subchapters: ["Introduction to Organic Compounds", "Structure and Bonding in Organic Molecules"] },
        { id: 2, title: "Chapter 2: Alkanes and Cycloalkanes", subchapters: ["Structure and Nomenclature of Alkanes", "Physical Properties of Alkanes"] },
        
    ];

    const additionalData = [
        { id: 1, title: "Chapter 1: Introduction to Organic Chemistry", duration: "1 hour", level: "Beginner" },
        { id: 2, title: "Chapter 2: Alkanes and Cycloalkanes", duration: "2 hours", level: "Intermediate" },   
    ];

    return (
        <Container maxWidth="lg" style={{ paddingTop: '20px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h5" gutterBottom>{decodedTitle}</Typography>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={youtubeVideoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                        <Typography variant="body1" style={{ marginTop: '20px' }}>{courseDescription}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
                        <Typography variant="h5" gutterBottom>Course Outline</Typography>
                        {chapters.map((chapter, index) => (
                            <Accordion key={chapter.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`chapter${chapter.id}-content`}
                                    id={`chapter${chapter.id}-header`}
                                >
                                    <Typography variant="subtitle1">{chapter.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {chapter.subchapters.map((subchapter, subIndex) => (
                                            <ListItem button component={Link} to={`/chapter-details/${chapter.id}/subchapters/${subIndex}`} key={subIndex}>
                                                <ListItemText primary={subchapter} />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Typography variant="body2">Duration: {additionalData[index].duration}</Typography>
                                    <Typography variant="body2">Level: {additionalData[index].level}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ChapterDetailsPage;
