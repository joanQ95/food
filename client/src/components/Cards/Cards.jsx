import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from './Cards.module.css'

export default function Cards({foods}){
    return <div className={style.cards}>
    {
        foods?.map(e=>{
            return(
                <>
                    <Link to={"/recipes/"+e.id}>
                        <Card name={e.name} image={e.image} diets={e.diets?e.diets:e.dietas.map(e=>e.name)} id={e.id}/>
                    </Link>
                </>	
            )
        }
        )
    }
    </div>
}