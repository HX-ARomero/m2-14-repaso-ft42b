import { useDispatch } from "react-redux"
import { addFavorite } from "../redux/actions";
import React from "react";

export default function Card({ episode }) {

    const [isFavorite, setIsFavorite] = React.useState(false);

    const dispatch = useDispatch();

    const handleClick = event => {
        const newFavorite = {
            ...episode,
            completed: false,
            rating: 3
        }
        // dispatch({type: "ADD_FAVORITE", payload: newFavorite});
        dispatch(addFavorite(newFavorite));
        setIsFavorite(true);
    }

    return (
        <div>
            <h3>Name: {episode.name}</h3>
            <h3>Episode: {episode.episode}</h3>
            <h3>Release date: {episode.air_date}</h3>
            {
                isFavorite ? null : <button onClick={handleClick}>Add to favorites</button>

            }
            <hr />
        </div>
    )
}