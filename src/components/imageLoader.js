import React, { useState } from "react";

const LoadImages = (props) => {
    const {imageSourceArray, getRandom} = props;

    return (
        <div>
            {imageSourceArray.map((src) => {
                return (
                    <img src={src} alt='' onClick={getRandom}/>
                )
            })}
        </div>
    )
};


export default LoadImages;