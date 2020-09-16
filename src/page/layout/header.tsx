import React,{ useContext } from 'react';
import { Row, Col, Menu, Dropdown } from 'antd';
import logo from 'static/images/logo.svg'
import style from "./header.module.scss";
import { Dispatch, Global } from 'components/context';

interface HeadertInterface {
  title: string;
  onLogout: () => void;
}



export const HeaderComponent: React.FC<HeadertInterface> = (props) => {
  
  const { title, onLogout } = props;

  const { global } = useContext(Global);
  const { dispatch } = useContext(Dispatch);

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="">用户信息</a>
      </Menu.Item>
      <Menu.Item>
        <a href="" onClick={() => onLogout()}>登出账户</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={style['header-warpper']}>
      <Row>
        <Col span={1}>&nbsp;</Col>
        <Col span={16}>
          <a href="/main" className={style.logo}>
            <img src={logo} alt="logo" />
            <span>{title}</span>
          </a>
        </Col>
        <Col span={6} style={{'textAlign':'right'}}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="">
              设置 
            </a>
          </Dropdown>
        </Col>
        <Col span={1}>&nbsp;</Col>
      </Row>
    </div>
  );
};
