import React, {Component} from "react";
import "../App.scss";
import Cookies from "universal-cookie";
import axios from "axios";

class SignUp extends Component{
    state = {
        username: "",
        password: "",
        showError: false,
        response: ""
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
        axios.get("http://localhost:8989/doesUsernameTaken", {
            params : {
                username : this.state.username
            }
        })
            .then((response) => {
                if(!response.data){
                    let sign_data = new FormData();
                    sign_data.append("username", this.state.username)
                    sign_data.append("password", this.state.password)
                    axios.post("http://localhost:8989/sign-up", sign_data)
                        .then((response) => {
                            if (response.data) {
                                this.setState({
                                    username: "",
                                    password: "",
                                    response: "Your account has been created!",
                                    showError: true,
                                })
                            } else {
                                this.setState({response: "failed to create account", showError: true})
                            }
                        })
                }
                else{
                    this.setState({
                        response : "this user is in use",
                        showError : true
                    })
                }
            })
    }
    login = () => {
        this.setState({showError : true,response:""})
        axios.get("http://localhost:8989/doesUsernameTaken", {
            params: {
                username: this.state.username
            }
        })
            .then((UserExist) => {
                if(UserExist.data){
                    axios.get("http://localhost:8989/log-in", {
                        params: {
                            username: this.state.username,
                            password: this.state.password
                        }
                    })
                        .then((response) => {
                            if (response.data) {
                                const cookies = new Cookies();
                                cookies.set("logged_in", response.data);
                                window.location.reload();
                            } else {
                                this.setState({
                                    showError: true,
                                    response: "Wrong password"
                                })
                            }
                        })
                }
                else{
                    this.setState({
                        showError:true,
                        response: "user doesnt exist"
                    })
                }
            })
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
                           placeholder={"Enter username"}
                    />
                    <input style={inputStyle}
                           onChange={this.onPasswordChange}
                           value={this.state.password}
                           placeholder={"Enter password"}
                    />
                    <div>
                        <button style={buttonStyle} onClick={this.login} disabled={!hasRequiredDetails} >Login</button>
                    </div>

                    <div>
                        <button style={buttonStyle} onClick={this.signUp} disabled={!hasRequiredDetails} >Sign Up</button>
                    </div>
                    {
                        this.state.showError ? <div style={{color: "red"}}>{this.state.response}</div> : <div/>
                    }
                </fieldset>

            </div>
        )
    }
}
export default SignUp;
