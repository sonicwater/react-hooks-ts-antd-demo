import * as React from 'react';
import { Row, Col, Menu, Dropdown } from 'antd';
import logo from 'static/images/logo.svg'
import 'static/styles/helmet.scss';
interface HelmetInterface {
  helmet: string;
}

export const HelmetComponent: React.FC<HelmetInterface> = (props) => {
  
  const { helmet } = props;

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#">用户信息</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">登出账户</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="helmet-warpper">
      <Row>
        <Col span={1}>&nbsp;</Col>
        <Col span={16}>
          <a href="/main" className="logo">
            <img src={logo} alt="logo" />
            <span>{helmet}</span>
          </a>
        </Col>
        <Col span={6} style={{'textAlign':'right'}}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              设置 
            </a>
          </Dropdown>
        </Col>
        <Col span={1}>&nbsp;</Col>
      </Row>
    </div>
  );
};
