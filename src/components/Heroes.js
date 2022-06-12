import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroesCard from "./HeroesCard";

const Heroes = () => {
    const [data,setData] = useState([]);
    const apiKey = '925c51a3ea4a55f117e7616231e4b945';
    useEffect(() => {
        axios
        .get(`http://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`)
        .then((res) => setData(res.data.data.results))
    },[])
    const heroesList = data.map((hero) => (
        <HeroesCard hero={hero} key={hero.name}/>
    ))

    return (
        <div className="heroes">
                {heroesList}
        </div>
    )
}
export default Heroes;