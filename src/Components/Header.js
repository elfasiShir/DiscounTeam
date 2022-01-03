import React from "react";
import "../App.scss"
class Header extends React.Component {
    render() {
        return (
            <div>
                <header style={{ background: '#222831', color: 'white', padding:'10px' }}>
                    <h1>DiscounTeam</h1>
                </header>
            </div>
        )
    }
}
export default Header;