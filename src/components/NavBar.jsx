import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props); //* props { userName: ----- }
    }

    render() {
        return(
            <div>
                <span>Actual user: {this.props.userName} </span>
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
                <hr />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}

// export default NavBar;
export default connect(mapStateToProps)(NavBar);