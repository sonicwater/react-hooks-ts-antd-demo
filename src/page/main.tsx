import React,{ useState, useContext, useEffect } from 'react'
import style from './main.module.scss';
// import { UserInfoContext } from 'model/root';
import { HeaderComponent } from "./layout/header";

import { Dispatch, Global } from 'components/context';


import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;



export default () => {

  const [displayState, setDisplayState] = useState({
    categorySiderDisplay: true,
    cartSiderDisplay: false
  });

  return (
    <Layout className={style.main}>
      <Header style={{'background':'#fff','padding':'0'}}>
        <HeaderComponent title='Ant Design' />
      </Header>
      
      <Layout className={style.layout}>
        <Sider
          width={240}
          collapsible={true}
          theme={"light"}
          trigger={null}
          collapsed={!displayState.categorySiderDisplay}
          onClick={() => setDisplayState({
            ...displayState,
            categorySiderDisplay: !displayState.categorySiderDisplay
          })}
        >
          1
        </Sider>
        <Content>
          
        </Content>
      </Layout>
    </Layout>
  )
  
}
