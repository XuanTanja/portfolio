import '../style/App.css';

import { Grid, Box, Button, Typography, Container } from '@material-ui/core';

import cv_path from '../assets/Lebenslauf_Tanja.pdf';

function ContactFooter() {

    const contactItems = [
        {
            title: "EMAIL",
            path: "mailto: tanja.manlik[at]gmx.com"
        },
        {
            title: "GITHUB",
            path: "https://github.com/xuantanja/"
        },
        {
            title: "LINKEDIN",
            path: "https://www.linkedin.com/in/tanja-manlik-0794291a4/"
        },
        /* {
            title: "XING",
            path: "https://www.xing.com/de"
        } */
    ]


    return(
        <div className="footer" id="contact-footer">
            <div className="main-content">
            <Container max-width="md">
           <Grid container alignItems="flex-start">
                <Grid item xs={12} md={5}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                        Contact
                    </Typography>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    {contactItems.map((item, idx) => (
                        <Grid item className="contact-item" key={idx}>
                            <Button target="_blank" rel="noopener noreferrer" href={item.path} className="contact-button">{item.title}</Button>        
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={1} md={3}>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box  className="align-right">
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                        Downloads
                    </Typography>
                        <Button target="_blank" rel="noopener noreferrer" href={cv_path} className="contact-button">Lebenslauf</Button>
                    </Box>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Typography gutterBottom variant="subtitle1" className="oswald align-center">
                &copy; 2022 Xuan Tanja
            </Typography>
            </Container>
            </div>
        </div>
    )
}

export default ContactFooter;