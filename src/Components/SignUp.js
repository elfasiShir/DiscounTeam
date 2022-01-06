import React, {Component} from "react";
import "../App.scss";
import Cookies from "universal-cookie";
import axios from "axios";

class SignUp extends Component{
    state = {
        username: "",
        password: "",
        showError: false,
        response: "",
        validPhoneNumber: "",
        validStrongPassword: ""
    }
    onUsernameChange = (e) => {
        let username = e.target.value;
        this.setState({
            username: username
        })
    }
    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    signUp = () =>{

    }
    render(){
        const inputStyle = {
            margin: "10px",
            width: "200px"
        }

        const buttonStyle = {
            margin: "10px",
            width: "200px",
            backgroundColor: "#222831",
            color: "white",
            borderRadius: "5px"
        }

        const hasRequiredDetails = !(this.state.username === "" || this.state.password === "");

        return(
            <div style={{margin: "auto", width: "50%", padding: "10px"}}>
                <fieldset style={{width: "300px"}}>
                    <legend>
                        <div style={{fontSize: "20px"}}>
                            Sign up to your account
                        </div>
                    </legend>
                    <input style={inputStyle}
                           onChange={this.onUsernameChange}
                           value={this.state.username}
                           placeholder={"Enter PhoneNumber"}
                    />
                    <input style={inputStyle}
                           onChange={this.onPasswordChange}
                           value={this.state.password}
                           placeholder={"Enter password"}
                    />

                    <div>
                        <button style={buttonStyle} onClick={this.signUp} disabled={!hasRequiredDetails} >Sign Up</button>
                    </div>

                </fieldset>
                <div style={{color: "red"}}>{this.state.response}</div>
                <div style={{color: "red"}}>{this.state.validStrongPassword}</div>
                <div style={{color: "red"}}>{this.state.validPhoneNumber}</div>
            </div>
        )
    }
}
export default SignUp;