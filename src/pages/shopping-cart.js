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
                <p>(add a quantity of items to this demo cart")</p>
                <div data-testid='x'>Items In Cart: {itemsNum}</div>
            </div>
            <ItemManager incrementItems={incrementItems}/>
        </div>
        </Layout>      
    )
}; 

export default ShoppingCart;