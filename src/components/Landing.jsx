import React from "react"
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Landing(props) {

    const [input, setInput] = React.useState({
        name: "",
        email: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = event => {
        const { value, name } = event.target;
        setInput({
            ...input,
            [name]: value
        })
    }
    // console.log(input);
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setUser(input));
        navigate("/home");
    }

    return (
        <div>
            <h2>Welcome!!!</h2>

            <form onSubmit={handleSubmit}>
                <label>Please, enter your name: </label>
                <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                />
                <br />

                <label>Please, enter your email: </label>
                <input
                    type="email"
                    name="email"
                    value={input.value}
                    onChange={handleChange}
                />
                <br />

                <button type="submit">Set name</button>
            </form>
        </div>
    )
}