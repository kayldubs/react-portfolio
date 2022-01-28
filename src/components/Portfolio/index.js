import React from 'react';
import portfolioImg from '../../assets/images/react-fest.png'

function Portfolio(props) {
    const currentCategory = {
        name: "Full-Stack Projects",
        description: "Projects using the MERN Stack.",
    };
  return (
    <section id="portfolio">
      <h1>{currentCategory.name}</h1>
      <img src={portfolioImg} className="img-thumbnail mx-1" style={{ width: '50%'}}></img>
      {/* <link href='https://react-fest.herokuapp.com/'>React Fest</link> */}
    </section>
  );
}
export default Portfolio;