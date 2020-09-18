import React,{ useContext } from 'react';
import { MenuComponent } from "./menu";
import { AccountComponent } from "./account";
import { Row, Col, Menu, Dropdown } from 'antd';
import logo from 'static/images/logo.svg'
import style from "./header.module.scss";
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

interface HeadertInterface {
  title: string;
}



export const HeaderComponent: React.FC<HeadertInterface> = (props) => {
  
  const { title } = props;

  return (
    <div className={style['header-warpper']}>
      <Row>
        <Col span={1}>&nbsp;</Col>
        <Col span={16}>
          <a href="/main" className={style.logo}>
            <img src={logo} alt="logo" />
            <span>{title}</span>
          </a>
          <MenuComponent onClickMenuItem={()=>{}} />
        </Col>
        <Col span={6} style={{'textAlign':'right'}}>
          <AccountComponent />
        </Col>
        <Col span={1}>&nbsp;</Col>
      </Row>
    </div>
  );
};
