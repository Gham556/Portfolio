import * as React from "react";
import Layout from "../components/layout";
import KnightsUI from  "../components/knights-travais.js";

const KnightsPage = () => {
    return (
            <Layout>
                <h1>Knights Travais</h1>
                <h3>Input The Start And End Squares On A Chessboard and I'll Return The Fastest Route Between Them For A Knight!</h3>
                <div className="links">  
                    <a href="https://github.com/Gham556/Knights-Travais">Original Project Repository</a>
                    <a href="https://github.com/Gham556/Portfolio">Current Project Repository</a>
                </div>  
                <KnightsUI></KnightsUI>
             </Layout>   
        
    );


};

export default KnightsPage