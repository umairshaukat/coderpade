import React, {useState}    from "react";
import { Link } from 'react-router-dom';
import usericon from "../assets/image/logo_small_dog.png";
import AuthHandler from "../Auth/AuthHandler";
import Config from "../utils/Config";
import { Redirect } from 'react-router';
import axios from "axios";
function Login(props) {

    const [data, setData]=React.useState({
    username:"",
    password:"",
    loginStatus:0,
});
const[btn,setbutton]=React.useState({
    btnDisabled:true,
})
function saveInputs(event){
    var key=event.target.name;
    const newdata={...data}
    newdata[event.target.name]=event.target.value;
    setData(newdata);
    console.log(newdata)
    if(data.username!='' && data.password!=''){
        setbutton({
            btnDisabled:false
        });
    }else{
        setbutton({
            btnDisabled:true
        });
    }
}

function formSubmit(event){
    event.preventDefault();
    console.log(data);
    // axios.post("http://127.0.0.1:8000/api/gettoken/",{
    //     username:data.username,
    //     password:data.password,
    // }).then(res=>{
    //     console.log(res.data)
    // })
    // console.log(this.data);

    // AuthHandler.login(this.state.username,this.state.password)
    AuthHandler.login(data.username,data.password,handlerAjaxResponse);
        setData({
        loginStatus:1,
    })
}
function handlerAjaxResponse(data){
    console.log(data);
    if(data.error){
        setData({loginStatus:4});
    }else{
        setData({loginStatus:3});
        window.location=Config.homeUrl;
    }
}

function getMessage(){
    if(data.loginStatus===0){
        return "";
    }
    else if(data.loginStatus === 1){
        return (<section className="flash bleed">
        <strong>Logging in!</strong>Please wait....</section>);
    }
    else if(data.loginStatus === 3){
        return (<section className="flash bleed">
        <strong>Logged In Successfully</strong></section>);
    }
    else if(data.loginStatus === 4){
        return (<section className="flash bleed">
        <strong>Invalid Login Details</strong></section>);
    }
};	

if(AuthHandler.loggedin()){
    return <Redirect to={Config.homeUrl}/>;
}
document.body.className="login";
return (<div>
    <div className="doge-header">
      <div className="doge-logo">
      <a href="#"><img alt="coderpad logo" width="285" height="75" 
      src={usericon}/>
      </a>
      <span className="eye" id="left" style={{transform: "rotate(46.6018deg)"}}></span>
      <span className="eye" id="right" style={{transform: "rotate(48.123deg)"}}></span>
      </div>
</div>
<div className="login-container">
{getMessage()}
    <form className="formtastic user" id="new_user"  method="POST" onSubmit={(event)=>{formSubmit(event)}}>
        <input type="hidden" name="authenticity_token" value="xbpM8U/6JLZzqNARH7abCZR/besGuoJSGRgNeKsvtgnXS6jKcG+yG6WlT2SIrGn6fMrMz91bQ5KszsnvCS2LGA==" />
          <fieldset className="inputs">
              <ol>
                <li className="email input required autofocus stringish" id="user_email_input">
                    <label for="user_email" className="">Email</label>
                    <input placeholder="vincent@coderpad.io" maxlength="255" id="user_email"  autofocus="autofocus" className="form-control" type="text" name="username" data-original-title="" title="" onChange={(event)=>{saveInputs(event)}} />
                </li>
                <p id="email-domain-tooltip">
                  We only support logging in with <a href="/">single sign on</a> for your organization.
                </p>
                <li className="password input required stringish" id="user_password_input">
                    <label for="user_password" className="">Password</label>
                    <input placeholder="••••••••" maxlength="128" id="user_password" className="form-control" type="password" name="password" onChange={(event)=>{saveInputs(event)}}/>	
                </li>
            </ol>
        </fieldset>
          <input type="submit" name="commit" value="Login" className="btn btn-primary" disabled={btn.btnDisabled} />
    </form>
    <p className="devise-links">
        <span>
        <Link to='/register'>Not a member yet?  Register for a free trial.
        </Link>
        </span>
        <span>
            <a href="/password/new">Forgot your password?</a>
        </span>
        <span>
            <a href="/confirmation/new">Didn't receive confirmation instructions?</a>
        </span>
        <span>
            <a href="/unlock/new">Didn't receive unlock instructions?</a>
        </span>	
    </p>
</div></div>
)
}

export default Login;