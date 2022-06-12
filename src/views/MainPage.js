import React from "react";
import Footer from "../components/Footer";
import Heroes from "../components/Heroes";

const MainPage = () => {

    return (
        <div className="main-page">
        <h1>Heroes</h1>
        <Heroes/>
        <Footer/>
        </div>
        
    )
}

export default MainPage;