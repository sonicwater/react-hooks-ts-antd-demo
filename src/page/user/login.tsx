import React, { useState } from 'react'
// import { Button, Form, Input } from 'antd';
import { LoginComponent } from "./components/login.component";
import { LoginEntity } from "./model/login";
import { useHistory } from "react-router-dom";
import { message } from 'antd';
const { log } = console;

const Login = () => {

  let history = useHistory();

  const [username,setUsername] = useState('sonic');

  // 登陆
  const handleLogin = (login:LoginEntity) => {
    if(
      login.login == 'admin' && 
      login.password == '123456'
     ){
      history.push("/main");
    }else{
      message.error('用户名或密码错误');
    }
  };

  return (
    <>
      <div className="login-bg">
        <LoginComponent onLogin={handleLogin} />
      </div>
    </>
  )
}
export default Login