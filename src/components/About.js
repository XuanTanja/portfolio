import React, { useState } from 'react';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';
import { motion } from "framer-motion";

import VisibilitySensor from 'react-visibility-sensor';

import meImg from '../assets/mePicColor.jpg';


function About() {
    // scroll animation with framer motion

    const [inView, setInView] = useState(false);

    function isInView() {
        setInView(true);
    }
    
    const transition = {
        duration: 0.4,
        delay: 0.2,
        ease: "easeInOut"
    };

    const variants = {
        hidden: {
            y:200,
            scale: 1,
            opacity: 0,
            transition
        },
        show: {
            y:0,
            scale: 1,
            opacity: 1,
            transition
        }
    };

    return(
        <VisibilitySensor onChange={isInView}>
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} exit="hidden" variants={variants} id="about">
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="section-title">Welcome to my portfolio!</h1>
            <Grid container alignItems="flex-start" spacing={5}>
                <Grid item xs={12} sm={4}>
                    <div className="align-center about-image">
                        <Card>
                            <CardMedia
                            component="img"
                            alt={ "Profilbild" }
                            height="auto"
                            src={ meImg }
                            title={ "Profilbild" }
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body1" gutterBottom  align="justify">
                        Here several of my different projects are presented.<br />
                        Have fun :)
                    </Typography>
                </Grid>
            </Grid>
        </motion.div>
        </VisibilitySensor>
    )
}

export default About;