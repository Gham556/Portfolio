import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "../components/index.module.css";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width={700}>
                <div>
                    <StaticImage width={700} height={400} src="../images/fredy-jacob-t0SlmanfFcg-unsplash.jpg"  alt="memory-card"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <StaticImage width={700} height={400} src="../images/hassan-pasha-7SjEuEF06Zw-unsplash.jpg" alt="chess-knights"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <StaticImage width={700} height={400} src="../images/scott-graham-5fNmWej4tAA-unsplash.jpg" alt="computers"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>