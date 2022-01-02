import React from "react";
import "../App.scss"
class Header extends React.Component {
    render() {
        return (
            <div>
                <header style={{ background: 'lightslategray', color: 'white'  }}>
                    <h1>DiscounTeam</h1>
                </header>
            </div>
        )
    }
}
export default Header;