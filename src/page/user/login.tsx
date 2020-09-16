import React, { useState, useEffect, useContext, useReducer } from 'react'
import { LoginComponent } from "components/login";
import { LoginEntity } from "model/login";
import { useHistory } from "react-router-dom";
import { message, Spin } from 'antd';
import { Login } from 'api/api';
import style from './login.module.scss';
import { Dispatch, Global } from 'components/context';
import { LOG_IN, LOG_OUT} from 'reducers/reducers';
const { log } = console;


export default () => {

  let history = useHistory();

  const { global } = useContext(Global);
  const { dispatch } = useContext(Dispatch);

  // 定义loading变量
  const [loading,setLoading] = useState<boolean>(false);

  // 默认登出
  useEffect(()=>{
    dispatch({ type: LOG_OUT });
  },[])
  

  // 登陆按钮逻辑
  const handleLogin = async (login:LoginEntity) => {

    // 打开loading
    setLoading(true);

    // 调用登陆Api，获取结果
    let res = await Login(login);

    // 关闭loading
    setLoading(false);

    // 处理结果
    if( res.code === 0 ){
      log(JSON.stringify(res));
      dispatch({ type: LOG_IN });
      
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
    <div className={style['login-bg']}>
      <div className={style['login-component-layout']}>
        <Spin spinning={loading}>
          <LoginComponent onLogin={handleLogin} />
          {JSON.stringify(global)}
        </Spin>
      </div>
    </div>
  )
}
