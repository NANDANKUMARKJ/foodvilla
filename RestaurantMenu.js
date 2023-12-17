import { useEffect } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const {resId} = useParams();

    useEffect(() =>{
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch("https://swigggy.com/restaurants/gramin-7th-block-koramangala-bangalore-642768")
        const json = await data.json();
        console.log(json);
    }

    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>Namaste</h2>
        </div>
    );
};

export default RestaurantMenu;