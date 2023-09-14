import axios from "axios";
import React from "react"
import Card from "./Card";

export default function Home(props) {

    const [episodes, setEpisodes] = React.useState({});

    React.useEffect(() => {
        axios("https://rickandmortyapi.com/api/episode")
            .then(response => setEpisodes(response.data))
            .catch(error => console.log(error))
    }, [])
    // console.log(episodes.results); // episodes = { info:..., results: [ {e}, {e}, ]}


    return (
        <div>
            <h2>Episodes</h2>
            <hr />
            {
                episodes.results?.map((episode, index) => <Card key={index} episode={episode}/>)
            }
        </div>
    )
}