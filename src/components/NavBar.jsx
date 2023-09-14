import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button>
                    <NavLink to="/home" style={({isActive}) => isActive ? {color: "coral"} : null} >
                        Home
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/favorites" style={({isActive}) => isActive ? {color: "coral"} : null} >
                        Favorites
                    </NavLink>
                </button>
            </div>
        )
    }
}

export default NavBar;