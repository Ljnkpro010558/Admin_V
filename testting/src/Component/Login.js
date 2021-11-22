import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { setUserSession, GetAPI } from "../Utils/Common";

export default class Home extends Component {
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
  }

  Password(e) {
    e.preventDefault();

    this.setState({
      Password: e.target.value,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/user" />;
    }
    const Addproduct = () => {
      if (this.state.Username === "" || this.state.password === "") {
        alert("Không được bỏ trống!!!");
      } else {
        var API = GetAPI();
        const bodyParameters = {
          username: this.state.Username,
          password: this.state.Password,
        };
        return axios
          .post(
            "https://"+API+"/api/auth/admin/login",
            bodyParameters
          )
          .then((response) => {
            if (response.status === 200) {
              alert("Đăng nhập thành công");
              sessionStorage.setItem("accessToken", response.data.accessToken);
              sessionStorage.setItem(
                "user",
                JSON.stringify(response.data.admin)
              );
              this.setState({
                redirect: true,
              });
            } else {
              alert("Đăng nhập thất bại");
            }
            console.log(response.status);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    return (
      <div
        className="product-status mg-b-30"
        style={{ marginTop: 25, height: "100%" }}
      >
        <div>
          <div className="color-line" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" />
              <div className="col-md-4 col-md-4 col-sm-4 col-xs-12">
                <div
                  className="text-center m-b-md custom-login"
                  style={{ marginBottom: 20, marginTop: 15 }}
                >
                  <h3 style={{ color: "white" }}>HÃY ĐĂNG NHẬP</h3>
                  <img
                    className="main-logo"
                    src="amadeus.png"
                    alt="amadeus"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="hpanel">
                  <div className="panel-body">
                    <form action="#" id="loginForm">
                      <div className="form-group">
                        <label className="control-label" htmlFor="username">
                          Username
                        </label>
                        <input
                          type="text"
                          value={this.state.Username}
                          onChange={this.Username}
                          title="Please enter you username"
                          required
                          name="username"
                          id="username"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          value={this.state.Password}
                          onChange={this.Password}
                          title="Please enter your password"
                          required
                          name="password"
                          id="password"
                          className="form-control"
                        />
                      </div>

                      <button
                        type="button"
                        className="btn btn-success btn-block loginbtn"
                        onClick={(event) => Addproduct(event)}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
