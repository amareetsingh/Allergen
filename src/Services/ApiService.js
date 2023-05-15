import axios from "axios";
import Util from "../Helpers/Utils";
// import { compareAsc } from 'date-fns';
import EventEmitter from "../Helpers/EventEmiter";
// import firebaseService from './firebase';
import { ApiConfig } from "../Constants/ApiConfig";
import { toastr } from "react-redux-toastr";
const FormData = require('form-data');

const toastrConfig = {
  timeOut: 3000,
  newestOnTop: true,
  position: "top-right",
  transitionIn: "bounceIn",
  transitionOut: "bounceOut",
  progressBar: false,
  closeOnToastrClick: true,
};
class apiService extends EventEmitter {
  init() {
    this.setInterceptors();
    //    this.handleAuthentication();
  }

  login = (payload) => {
  
 
    return new Promise((resolve, reject) => {
      axios
        .post(ApiConfig.routes.login,payload ,{
          headers: {
            Accept:'multipart/form-data',	
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
         
          reject(err);
        });
    });
  };


  getTotalRecipe = (payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post(ApiConfig.routes.getTotalRecipe,payload ,{
          headers: {
            Accept:'multipart/form-data',	
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
     
getUser = (payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post(ApiConfig.routes.getUser,payload ,{
          headers: {
            Accept:'multipart/form-data',	
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

}

const instance = new apiService();

export default instance;
