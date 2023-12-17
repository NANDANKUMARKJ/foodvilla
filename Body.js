import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("render");

    if(!allRestaurants) return null;

    if (filteredRestaurants?.length === 0)
        return <h1>No restaurants match your filter!!</h1>

    return allRestaurants?.length === 0 ?( <Shimmer /> ) : (
        <>
        <div className="search-container">
            <input type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn"
            onClick={() => {
                const data = filterData(searchText, restaurants)
                setRestaurants(data);
            }}>search</button>
        </div>
        <div className="restaurant-list">
        {
            filteredRestaurants.map((restaurant) =>
            {
                return <RestaurantCard {...restaurant.data} key={restaurant.data}/>
            })
        }
        </div>
        </>
    )
}

export default Body;