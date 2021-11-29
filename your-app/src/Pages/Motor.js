import React, { Component } from "react";
import "../asset/sb-admin-2.min.css";
import Header from "../Components/Header";
import "../asset/style2.css";
import axios from "axios";
import TRUE from "../asset/190411.png";
import FALSE from "../asset/5290036.png";
import DC from "../asset/Dong-co.png";
import { GetAPILMortor, } from "../Utils/Common";



export default class Mortor extends React.Component{
    constructor() {
        super();
        this.state = {
            Mortor: {
                id: 'A',
                TagName:'B',
                TagModel:'C',
                TagOn: true,
                TagState: true,
                Conn: true,
                error: false,

            }
        }
    }

        componentDidMount() {
            setInterval(function(){ 
               
                var API = GetAPILMortor();
                axios
                .get(API )
                .then((response) => {
                 
                    this.setState({
                        id: response.data.id,
                        TagName: response.data.tagName,
                        TagModel: response.data.tagModel,
                        TagOn: response.data.tagOn,
                        TagState: response.data.tagState,
                        Connected: response.data.Conn,
                        error: response.data.error
                      });
                    
                 
                  
                })
                .catch((error) => {
                  console.log(error);
                });   
            }, 3000);
        }

    render(){
    
    var Tag;
    var ICON;
    var ICON2;
    var ICON3;
     if(this.state.Mortor.TagState === true) { Tag = "ON "; ICON = TRUE}
     else {Tag = "OFF "; ICON = FALSE}

     var Conn;
     if(this.state.Mortor.Conn === true) { Conn = "Connected ";ICON2 = TRUE}
     else {Conn = "Not Connect ";ICON2 = FALSE}


     var err;
     if(this.state.Mortor.error === true) { err = "Is Error ";ICON3 = FALSE}
     else {err = "Not Error ";ICON3 = TRUE}

        return (
            <div id="wrapper">
            <Header></Header>
            <div className="container-fluid" style={{ marginTop: '40px'}}>
            <div className="container mt-3 d-flex justify-content-around" style={{backgroundColor:'whitesmoke',maxWidth: 800}}>
           
            <div class="container mt-5 mb-5 d-flex justify-content-center " style={{maxWidth: 700}}>
            
                    <div class="image"> <img src={DC} class="rounded" width="155" /> </div>
                    <div class="ml-3 w-100">
                        <h4 class="mb-0 mt-0">ID: {this.state.Mortor.id}</h4> <span>Tên thiết bị: {this.state.Mortor.TagName}</span> <br/> <span>Tên loại thiết bị: {this.state.Mortor.TagModel}</span>
                        <div class="p-2 mt-2 bg-primary d-flex justify-content-around rounded text-white stats">
                            <div class="d-flex flex-column"> <span class="articles">Status: </span> <span class="number1" style={{fontWeight: 'bold'}}>{Tag}  
                            <img
                                src={ICON}
                                className="img-fluid mr-3"
                                style={{height:18,width: 18}}
                                alt="Logo"
                                /></span>  </div>
                            <div class="d-flex flex-column"> <span class="followers">Monitoring OPC UA client: </span> <span class="number2 " style={{fontWeight: 'bold'}}>{Conn} 
                            <img
                                src={ICON2}
                                className="img-fluid mr-3"
                                style={{height:18,width: 18}}
                                alt="Logo"
                                />
                            </span> </div>
                            <div class="d-flex flex-column"> <span class="followers">Error: </span> <span class="number2 " style={{fontWeight: 'bold'}}>{err} 
                            <img
                                src={ICON3}
                                className="img-fluid mr-3"
                                style={{height:18,width: 18}}
                                alt="Logo"
                                />
                            </span> </div>
                        </div>
                        
                    </div>
                </div>
           


            </div>
          </div>
         
          </div>
        );
    }
}