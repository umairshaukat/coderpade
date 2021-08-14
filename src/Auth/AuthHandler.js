import axios from "axios";
import Config from '../utils/Config';
import {reactLocalStorage} from 'reactjs-localstorage';

class AuthHandler{
    static login(username,password,callback){
        axios.post(Config.loginUrl,{username:username,password:password}).then(function(response){
            
           reactLocalStorage.set("token",response.data.access);
           reactLocalStorage.set("refresh",response.data.refresh);
           callback({error:false,message:"Login Successfully"});
        })
        .catch(function(error){
            callback({error:true,message:"Error while Login"});
        })
    }
    
    static register(username,email,lastname,password,callback){
        axios.post(Config.registerUrl,{username:username,email:email,lastname:lastname,password:password}).then(function(response){
            
           reactLocalStorage.set("token",response.data.access);
           reactLocalStorage.set("refresh",response.data.refresh);
           callback({error:false,message:"Register Successfully"});
        })
        .catch(function(error){
            callback({error:true,message:"Error while Register"});
        })
    }
    
    static regtered(){
        if(reactLocalStorage.get("token") && reactLocalStorage.get("refresh")){
            return true;
        }else{
            return false;
        }
    }
    static loggedin(){
        if(reactLocalStorage.get("token") && reactLocalStorage.get("refresh")){
            return true;
        }else{
            return false;
        }
    }
}
export default AuthHandler;