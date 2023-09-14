export default function Card({ episode }) {
    return (
        <div>
            <h3>Name: {episode.name}</h3>
            <h3>Episode: {episode.episode}</h3>
            <h3>Release date: {episode.air_date}</h3>
            <hr />
        </div>
    )
}