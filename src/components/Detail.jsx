import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function Detail(props) {
    const { id } = useParams();
    // console.log(id);
    const favorites = useSelector(state => state.favorites);
    const actualFavorite = favorites.filter(fav => fav.id === Number(id))[0];
    console.log(actualFavorite);
    return (
        <div>
            <h3>Detail</h3>
            <hr />
            <h3>Name: {actualFavorite.name}</h3>
            <h3>Characters:</h3>
            {
                actualFavorite.characters.map((char, index) => (
                    <p key={index}>
                        <a href={char} target="_blank">{char}</a>
                    </p>
                ))
            }

        </div>
    )
}