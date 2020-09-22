import React,{ useState, useContext, useEffect } from 'react'
import style from './main.module.scss';

import { HeaderComponent } from "./layout/header";
// import { Dispatch, Global } from 'components/context';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from 'components/route';
import { RouteInterface } from 'model/route';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;



export default (props:any) => {

  const {routes} = props;

  return (
    <Layout className={style.main}>
      <Header style={{'background':'#fff','padding':'0'}}>
        <HeaderComponent routes={routes} />
      </Header>
      
      <Layout className={style.layout}>
        <Content>
          <Switch>
            {routes.map((route: RouteInterface, i: number) => {
              return RouteWithSubRoutes(route, i)
            })}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
  
}
