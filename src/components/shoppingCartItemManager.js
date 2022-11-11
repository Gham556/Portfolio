import React, { useState } from "react";
import stick from '../images/shoppingCartImages/stick.png';
import bucket from '../images/shoppingCartImages/bucket.jpg'; 
import car from '../images/shoppingCartImages/car.jpg'; 
import food from '../images/shoppingCartImages/food.jpg';
import horse from '../images/shoppingCartImages/horse.jpeg';
import warHammer from '../images/shoppingCartImages/warhammer.jpeg';
import '../components/shoppingCart.css'

const ItemManager = (props) => {
    const [ itemArray, setItemArray ] = useState([{name: 'Wooden Sword', imgSrc: stick, description: "A swift and nimble weapon crafted by Mother Nature Herself", price: 19.99}, {name: 'Tin Helm', imgSrc: bucket, description:'A sturdy an lightweight helm that can double as a bucket', price: 10.99}, {name: 'Chariot', imgSrc:car, description: 'A perfect travais of yore. (Horses not include)', price:'100'}, {name:'Rations', imgSrc:food, description: 'Healthy and full of fiber. Gaurenteed not to give you scurvy!', price: 5.99}, {name:'Horse', imgSrc:horse, description:"Look no further for your trusty steed. You'll be going places in no-time!", price: 501.99}, {name: 'Warhammer', imgSrc:warHammer, description:"Crush your oponents heads like Galagher crushes watermellons!", price: '50.99'}]); 
    const {incrementItems} = props; 
   
    return (
        <div>
            {itemArray.map((item) => {
                return (
                    <div className="item">
                       <img src={item.imgSrc} alt=''className="images"/>
                          <div className="itemDetails">
                            <h1 className="itemName">{item.name}</h1> 
                            <h3 className="itemDescription">{item.description}</h3>
                            <div className="itemPrice">{item.price}</div>
                          </div>  
                          <div className="cartAdd">
                            <form className="itemForm" onSubmit={incrementItems}>   
                                <label>Quantity</label>
                                <input type='number' min={0} max={10}></input> 
                                <button type="submit">Add to Cart</button>
                            </form>  
                          </div>  
                    </div>   
                )
            })}
        </div>
    )
}

export default ItemManager; 