import React from 'react';
import coverPhoto from '../../assets/images/port-header.jpeg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  portHero: {
      component: "img",
      backgroundImage: {coverPhoto},
      width: '100%',
      height: '400vh'
    }
  }))


function About() {
  const classes = useStyles();
  return (
    <section className={classes.portHero}>
      <img src={coverPhoto} style={{ width: '100%' }}></img>
      <h1 id="about">Welcome to my Portfolio!</h1>
      <h2> My name is Kaylee Stevens and I have recently graduated from University of Texas at Austin's Full Stack Bootcamp! 
        Hopefully you enjoy my work as much as I do!
      </h2>
    </section>
  );
}

export default About;