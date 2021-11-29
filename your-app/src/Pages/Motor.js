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

                id: '',
                TagName: '',
                TagModel: '',
                TagOn: null,
                TagState: null ,
                Conn: null,
                error: null,

            
        }
    }

    async componentDidMount() {
        try {
            var API = GetAPILMortor();
            setInterval(async () => {
              
                axios
                .get(API)
                .then((response) => {
                    console.log(response.data.result.connected + "adasdasd");
                    this.setState({                      
                        id: response.data.result.id,
                        TagName: response.data.result.tagName,
                        TagModel: response.data.result.tagModel,
                        TagOn: response.data.result.tagOn,
                        TagState: response.data.result.tagState,
                        Connected: response.data.result.connected,
                        error: response.data.result.error
                        
                      });
                      console.log(this.state.Connected + "ttds");

                  
                })
                .catch((error) => {
                  console.log(error);
                });   
            }, 5000);
        } catch (error) {
            console.log(error)
          }
        }

    render(){
    
    var Tag;
    var ICON;
    var ICON2;
    var ICON3;
     if(this.state.TagState === true) { Tag = "ON "; ICON = TRUE}
     else {Tag = "OFF "; ICON = FALSE}

     var Conn;
     if(this.state.Connected === true) { Conn = "Connected ";ICON2 = TRUE}
     else {Conn = "Not Connect ";ICON2 = FALSE}


     var err;
     if(this.state.error === true) { err = "Is Error ";ICON3 = FALSE}
     else {err = "Not Error ";ICON3 = TRUE}

        return (
            <div id="wrapper">
            <Header></Header>
            <div className="container-fluid" style={{ marginTop: '40px'}}>
            <div className="container mt-3 d-flex justify-content-around" style={{backgroundColor:'whitesmoke',maxWidth: 800}}>
           
            <div class="container mt-5 mb-5 d-flex justify-content-center " style={{maxWidth: 700}}>
            
                    <div class="image"> <img src={DC} class="rounded" width="155" /> </div>
                    <div class="ml-3 w-100">
                        <h4 class="mb-0 mt-0">ID: {this.state.id}</h4> <span>Tên thiết bị: {this.state.TagName}</span> <br/> <span>Tên loại thiết bị: {this.state.TagModel}</span>
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