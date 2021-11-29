import React, { Component } from "react";
import axios from "axios";
import { setUserSession,GetAPILogin } from "../Utils/Common.js";
import { Navigate } from "react-router-dom";
import "../asset/style.css";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          Username: "",
          Password: "",
          redirect: false,
        };
        this.Username = this.Username.bind(this);
        this.Password = this.Password.bind(this);
      }
    
      Username(e) {
        e.preventDefault();
    
        this.setState({
          Username: e.target.value,
          
        });
        console.log(this.state.Username);
      }
    
      Password(e) {
        e.preventDefault();
    
        this.setState({
          Password: e.target.value,
        });
      }
    render(){
        if (this.state.redirect === true) {
            return <Navigate to="/Home" />;
          }
          const Addproduct = () => {
            if (this.state.Username === "" || this.state.password === "") {
              alert("Không được bỏ trống!!!");
            } else {
              const bodyParameters = {
                'email': this.state.Username,
                'password': this.state.Password
              };
              var APILogin = GetAPILogin();
                axios
                .post(APILogin, bodyParameters )
                .then((response) => {
                  if (response.data.signin == "done") {
                    alert("Đăng nhập thành công");
                    setUserSession(this.state.Username);
                    this.setState({
                        redirect: true,
                      });
                    
                  } else {
                    alert("Đăng nhập thất bại");
                  }
                  console.log(response.data.message);
                })
                .catch((error) => {
                  console.log(error);
                });

            }
          };
        return (
            <>
            <div className="container" style={{backgroundColor:"linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33))"}}>
                <div className="card card-container">
               
                <img id="profile-img" className="profile-img-card" alt="account" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" className="profile-name-card" />
                <div className="form-signin" >
                <span id="reauth-email" className="reauth-email" />
                <input type="email" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="Email address" 
                        value={this.state.Username}
                        onChange={this.Username} 
                        required   />
                <input type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    value={this.state.Password}
                    onChange={this.Password}
                    required />
                
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={(event) => Addproduct(event)}>Sign in</button>
                </div>
              
                </div>
            </div>
            </>
        );
    }
}