import React, { Component } from "react";
import "../asset/sb-admin-2.min.css";
import Header from "../Components/Header";
import "../asset/style.css";

export default class Info extends Component{
    render(){
        return (
           <div id="wrapper" >
              <Header></Header>
              <div className="container-fluid" style={{ marginTop: '40px'}}>
                <div className="container mt-2 d-flex justify-content-around" style={{backgroundColor:'whitesmoke'}}>

                    <div style={{width: '100%'}}>
                    <h3 class=" title-comm"><span class="title-holder">ỨNG DỤNG TĂNG CƯỜNG THỰC TẾ</span></h3>

                    <div id='nz-div'>
	                    <h3 class="tde"><span class="null">THIẾT BỊ SỐ PHỤ KIỆN</span></h3>
                </div>
                    </div>
              
                </div>
            </div>
           
            </div>

        );
    }
}