import * as React from "react";
import Layout from "../components/layout";
import KnightsUI from  "../components/knights-travais.js";

const KnightsPage = () => {
    return (
            <Layout>
                <h1>Knights Travais</h1>
                <h3>Input The Start And End Squares On A Chessboard and I'll Return The Fastes Route Between Them!</h3>
                <KnightsUI></KnightsUI>
             </Layout>   
        
    );


};

export default KnightsPage