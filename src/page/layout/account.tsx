import React,{ useState, useEffect, useContext } from "react";
import { Menu, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import style from "./account.module.scss";
import { Dispatch, Global } from 'components/context';
import { LOG_OUT } from 'reducers/reducers';

interface PropsMenu {
  
}

export const AccountComponent: React.FC<PropsMenu> = (props) => {

  const history = useHistory();

  const { dispatch } = useContext(Dispatch);
  const { global } = useContext(Global);

  // 判断登出
  useEffect(()=>{
    if(!global.loggedIn){
      // 跳转到login页面
      history.push("/login");
    }
  },[global.loggedIn]);

  // 登出按钮逻辑
  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a href=""><UserOutlined /> &nbsp;用户信息</a>
      </Menu.Item>
      <Menu.Item>
        <a href="" onClick={() => handleLogout()}>
          <LogoutOutlined /> &nbsp;登出账户
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <a className="ant-dropdown-link" href="">
        <span className={style.account}>张</span>
      </a>
    </Dropdown>
  )
}