import React,{ useContext } from 'react';
import { NavComponent } from "page/layout/nav";
import { AccountComponent } from "./account";
import { SettingBarComponent } from "./setting";
import { Row, Col, Menu, Dropdown } from 'antd';
import logo from 'static/images/logo.svg'
import style from "./header.module.scss";
import { UserOutlined, LogoutOutlined, SettingTwoTone } from '@ant-design/icons';

// interface HeadertInterface {
  
// }

export const HeaderComponent: React.FC<any> = (props) => {
  
  const {routes} = props;

  return (
    <div className={style['header-warpper']}>
      <Row>
        <Col span={1}>&nbsp;</Col>
        <Col span={16}>
          <a href="/main" className={style.logo}>
            <img src={logo} alt="logo" />
            <span>Ant Design</span>
          </a>
          <NavComponent routes={routes} />
        </Col>
        <Col span={6} style={{'textAlign':'right'}}>
          <SettingBarComponent />
          <AccountComponent />
        </Col>
        <Col span={1}>&nbsp;</Col>
      </Row>
    </div>
  );
};
