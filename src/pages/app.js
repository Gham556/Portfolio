import  React, { useState }  from 'react';
import Layout from "../components/layout"
import ImageLoader from '../components/imageLoader';
import aphrodite from '../images/aphrodite.png';
import ares from  '../images/ares.png';
import artemis from  '../images/artemis.png';
import daphne from  '../images/daphne.png';
import echo from  '../images/echo.png';
import eris from  '../images/eris.png';
import eros from  '../images/eros.png';
import hades from  '../images/hades.png';
import hecates from  '../images/hecate.png';
import hephaestus from '../images/hephaestus.png';
import hera from   '../images/hera.png';
import hermes from  '../images/hermes.png';
import persephone from  '../images/persephone.png';
import poseidon from  '../images/poseidon.png';
import psyche from  '../images/psyche.png'; 

const App = () => {
  const [count, setCount] = useState(0);
  const [imageSourceArray, setArray] = useState([aphrodite, ares, artemis, daphne, echo, eris, eros, hades, hecates, hephaestus, hera, hermes, persephone, poseidon, psyche]);
  const [clickedArray, setClicked] = useState([]);
  const [highScore, setHighScore] = useState(0);

    const incrementCount = () => {
       console.log(clickedArray, 'at increment counter')
      if (( clickedArray.filter( (item, index) => clickedArray.indexOf( item ) != index ).length ) >= 1) {
        getHighScore(count);      
        setCount(0);}
        else {
          setCount(count +1);
        }
    };

    const getClicked = (e) => {
      setClicked( clickedArray.concat([e.target.src], incrementCount() ));
      console.log( clickedArray, "at getClicked" )
    }
    const getRandom = (e) => {
        let currentIndex = imageSourceArray.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex= Math.floor(Math.random()*currentIndex);
            currentIndex--; 
            [imageSourceArray[currentIndex], imageSourceArray[randomIndex]] = [imageSourceArray[randomIndex], imageSourceArray[currentIndex]]             
        };
        setArray(imageSourceArray); 
        return (getClicked(e))  
    };

    const getHighScore = (e) => {
      if (e > highScore) {
        setHighScore(e);
      }

      setClicked([]);
      console.log(clickedArray)
    }

  return (
  <Layout>  
    <div>
      <div id='header'>
        <h1>Memory Game!</h1>
        <h2>Click An Image To Increase Your Score, But Be Sure Not To Click The Same Image Twice!</h2>
      </div>
      <div id='countersContainer'>
        <div>
          <div>Current Score</div>
          <div>{count}</div>
        </div>  
        <div>
          <div>High Score</div>
          <div>{highScore}</div>
        </div>
      </div>  
        <div>
          <ImageLoader imageSourceArray={imageSourceArray} getRandom={getRandom}/>
        </div>
    </div>
  </Layout>  
  );
}

export default App;
