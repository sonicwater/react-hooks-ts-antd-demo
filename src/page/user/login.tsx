import React, { useState } from 'react'
import { LoginComponent } from "components/login";
import { LoginEntity } from "model/login";
import { useHistory } from "react-router-dom";
import { message, Spin } from 'antd';
import { Login } from 'api/api';
import './login.scss';
const { log } = console;

export default () => {

  let history = useHistory();

  // 定义loading变量
  const [loading,setLoading] = useState<boolean>(false);

  // 登陆按钮逻辑
  const handleLogin = async (login:LoginEntity) => {

    // 打开loading
    setLoading(true);

    // 调用登陆Api，获取结果
    let res = await Login(login);

    // 关闭loading
    setLoading(false);

    // 处理结果
    if( res.code == 0 ){
      // 跳转到main页面
      history.push("/main");
      // 提示登陆成功
      message.success(res.data.message);
    }else{
      // 提示登陆失败
      message.error(res.data.message);
    }

  };

  return (
    <div className="login-bg">
      <div className="login-component-layout">
        <Spin spinning={loading}>
          <LoginComponent onLogin={handleLogin} />
        </Spin>
      </div>
    </div>
  )
}
