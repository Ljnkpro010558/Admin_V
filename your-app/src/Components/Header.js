import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { getToken, removeUserSession } from "../Utils/Common";




function Header(props) {
  const [loggedIn, setloggedIn] = useState(getToken() ? true : false);
  let navigate = useNavigate();
  const logOut = (event) => {
    removeUserSession();
    navigate('/');
  };


  const displayCheck = () => {
    if (loggedIn) {
      return (
        <div className="ml-auto"> 
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownId"
              >
                
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={(event) => {
                    logOut(event);
                  }}
                >
                  Đăng xuất
                </button>
              </div>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="navbar-nav nav-item ml-auto">
          <Link className="nav-link px-0 mx-0" to="/dang-nhap">
            Đăng nhập
          </Link>
          <span className="text-light my-auto">&#160;/&#160;</span>
          <Link className="nav-link px-0 mx-0" to="/dang-ki">
            Đăng ký
          </Link>
        </div>
      );
    }
  };
  return (
    <div>
      <header className="fixed-top" style={{backgroundColor: '#212529'}}>
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <div className="container p-0">
            <div className="col-lg-2 p-0 d-flex">
              <Link className="navbar-brand" to="/Home">
                Admin
              </Link>
              <button
                className="navbar-toggler hidden-lg-up ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div
              className="col-lg-6 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown mr-3">
                  <div
                    className="nav-link dropdown-toggle"
                    type="button"
                    id="category"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Thiết bị
                  </div>
                  <div className="dropdown-menu" aria-labelledby="category">
                    <Link className="dropdown-item" to="/Thiet-bi/Motor">
                      Motor
                    </Link>
                    
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Info">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              {displayCheck()}
            </div>
           
               
            
           
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
