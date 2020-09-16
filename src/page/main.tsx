import React,{ useState, useContext, useEffect } from 'react'
import style from './main.module.scss';
// import { UserInfoContext } from 'model/root';
import { HeaderComponent } from "./layout/header";
import { useHistory } from "react-router-dom";
import { Dispatch, Global } from 'components/context';
import { LOG_OUT } from 'reducers/reducers';
// import { LOG_IN, LOG_OUT} from 'reducers/reducers';

import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;



export default () => {

  let history = useHistory();

  const [displayState, setDisplayState] = useState({
    categorySiderDisplay: true,
    cartSiderDisplay: false
  });

  const { global } = useContext(Global);
  const { dispatch } = useContext(Dispatch);

  // 判断登出
  useEffect(()=>{
    if(!global.loggedIn){
      // 跳转到login页面
      history.push("/login");
    }
  },[global.loggedIn])


  // 登陆按钮逻辑
  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
    // 跳转到login页面
    // history.push("/login");
  }

  return (
    <Layout className={style.main}>
      <Header style={{'background':'#fff','padding':'0'}}>
        <HeaderComponent title='Ant Design' onLogout={handleLogout} />
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
          {JSON.stringify(global)}
        </Content>
      </Layout>
    </Layout>
  )
  
}
