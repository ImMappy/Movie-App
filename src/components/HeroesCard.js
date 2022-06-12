import React from "react";

const HeroesCard = (props) => {

    const {hero} = props;
    console.log(hero.thumbnail)

    return (
        <ul className="card">
            <li >
            <div className ="infos-container">
                <h2>{hero.name}</h2>
                <img src={hero.thumbnail.path+"/portrait_medium."+hero.thumbnail.extension} alt="img"/>     
            </div>
        </li>
        </ul>
       
    )
}
export default HeroesCard;