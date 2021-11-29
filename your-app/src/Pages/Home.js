import React, { Component } from "react";
import "../asset/sb-admin-2.min.css";
import Header from "../Components/Header";
import "../asset/style2.css";
import img from "../asset/logo.jpg";



export default class Home extends Component{
    render(){
        return (
            <div id="wrapper" style={{backgroundColor: 'linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33))', height:'200%'}}>
            <Header></Header>
            <div className="container-fluid" style={{ marginTop: '40px'}}>
              <div className="container mt-3 d-flex justify-content-around" style={{backgroundColor:'whitesmoke'}}>

                  <div style={{width: '100%'}}>
                  <h3 class=" title-comm"><span class="title-holder">ỨNG DỤNG TĂNG CƯỜNG THỰC TẾ</span></h3>
                <div className="container-fluid justify-content-center d-flex">
                  <img src={img} alt />
                  </div>
                  <div id='nz-div'>
                      <h3 class="tde"><span class="null">GIẢNG VIÊN HƯỚNG DẪN</span></h3>
                    </div>
                <div className="container-fluid justify-content-center d-flex" >
                     {/* Single Advisor*/}
                     <div className="col-6 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                            {/* Team Thumb*/}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                            {/* Social Info*/}
                            <div className="social-info"><a><i className="fa fa-facebook" /></a><a><i className="fa fa-twitter" /></a><a><i className="fa fa-linkedin" /></a></div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                            <p className="designation">Phó giáo sư tiến sĩ</p>
                            <h6>Trương Đình Nhơn</h6>
                            
                            </div>
                        </div>
                        </div>
                </div>

                  <div id='nz-div'>
                      <h3 class="tde"><span class="null">THÀNH VIÊN NHÓM</span></h3>
                    </div>

                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                        {/* Section Heading*/}
                        <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                            <h3>Thành viên của <span> Nhóm</span></h3>
                            <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                            <div className="line" />
                        </div>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center d-flex">
                        {/* Single Advisor*/}
                        <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                            {/* Team Thumb*/}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt />
                            {/* Social Info*/}
                            <div className="social-info"><a ><i className="fa fa-facebook" /></a><a ><i className="fa fa-twitter" /></a><a ><i className="fa fa-linkedin" /></a></div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                            <p className="designation">Trưởng nhóm: </p>
                            <h6>Vler 1</h6>
                            </div>
                        </div>
                        </div>
                        {/* Single Advisor*/}
                        <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                            {/* Team Thumb*/}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt />
                            {/* Social Info*/}
                            <div className="social-info"><a><i className="fa fa-facebook" /></a><a><i className="fa fa-twitter" /></a><a><i className="fa fa-linkedin" /></a></div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                            <p className="designation">Thành Viên: </p>
                            <h6>Vler 2</h6>
                            </div>
                        </div>
                        </div>
                        {/* Single Advisor*/}
                        <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                            {/* Team Thumb*/}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt />
                            {/* Social Info*/}
                            <div className="social-info"><a><i className="fa fa-facebook" /></a><a><i className="fa fa-twitter" /></a><a><i className="fa fa-linkedin" /></a></div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                            <p className="designation">Thành Viên: </p>
                            <h6>Vler 3</h6>
                            </div>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>




                  
            
              </div>
          </div>
         
          </div>
        );
    }
}