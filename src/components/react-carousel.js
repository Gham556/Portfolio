import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "../components/index.module.css";
import { Link } from 'gatsby';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width={700}>
                <div>
                    <StaticImage width={700} height={400} src="../images/fox-hyde-5Q7xNm73WV8-unsplash.jpg"  alt="board-game"/>
                    <Link to="http://ec2-34-201-77-115.compute-1.amazonaws.com:3000/catalog" className="legend">Inventory Application</Link>
                </div>
                <div>
                    <StaticImage width={700} height={400} src="../images/fredy-jacob-t0SlmanfFcg-unsplash.jpg"  alt="memory-card"/>
                    <Link to="memory-game" className="legend">Memory Game</Link>
                </div>
                <div>
                    <StaticImage width={700} height={400} src="../images/hassan-pasha-7SjEuEF06Zw-unsplash.jpg" alt="chess-knights"/>
                    <Link to="knights-travais" className="legend">Knights Travais</Link>
                </div>
                <div>
                    <StaticImage width={700} height={400} src="../images/wim-van-t-einde-uj7eb7CgqRk-unsplash.jpg" alt="umbrellas"/>
                    <Link to="weather" className="legend">Weather App</Link>
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