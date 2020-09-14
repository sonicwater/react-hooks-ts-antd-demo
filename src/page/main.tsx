import React,{ useState } from 'react'

import './main.scss';
import { HelmetComponent } from "components/helmet";
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

export default () => {

  const [displayState, setDisplayState] = useState({
    categorySiderDisplay: false,
    cartSiderDisplay: false
  });

  return (
    <div>
      <Layout className="container">
        <Header className="header">
          <HelmetComponent helmet='Ant Design' />
        </Header>
        <Layout>
          <Sider
              collapsible={true}
              theme={"light"}
              trigger={null}
              collapsed={!displayState.categorySiderDisplay}
          >
            1
          </Sider>
          <Content className="content">
            2
          </Content>
        </Layout>
      </Layout>
    </div>
  )
  
}
