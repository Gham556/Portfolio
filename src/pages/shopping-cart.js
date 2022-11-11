import React, { useState } from "react";
import ItemManager from '../components/shoppingCartItemManager'
import Layout from "../components/layout"


const ShoppingCart = () => {
    const [ itemsNum, setItemsNum ] = useState(0);

    const incrementItems = (e) => {
        e.preventDefault();
        setItemsNum(itemsNum + Number(e.target[0].value)); 
    }

    return (
      <Layout>  
        <div className="shoppingCartMain">
            <div id="cartHeader">
                <h1>Shopping Cart</h1>
                <div className="links">
                    <a href="https://github.com/Gham556/Shopping-Cart">Original Project Repository</a>
                    <a href="https://github.com/Gham556/Portfolio/tree/gatsby">Current Project Repository</a>
                </div>
                <div className="cart" data-testid='x'>Items In Cart: {itemsNum}</div>
            </div>
            <ItemManager incrementItems={incrementItems}/>
        </div>
        </Layout>      
    )
}; 

export default ShoppingCart;