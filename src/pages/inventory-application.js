import React, { useState } from "react";
import Layout from "../components/layout";
import axios from 'axios';
var data = JSON.stringify({
    "collection": "games",
    "database": "inventory-app",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nbxga/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '<API_KEY>',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


const InventoryApp = () => {
    
    return (
        <Layout>
        <div>
            <button>Hello</button>
        </div>
        </Layout>
    )
};

export default InventoryApp