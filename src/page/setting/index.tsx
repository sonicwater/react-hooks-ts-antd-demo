import React,{ useState, useEffect, useContext } from "react";

import { MenuComponent } from './menu';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from 'components/route';
import { RouteInterface } from 'model/route';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

export default (props:any) => {

  const {routes} = props;

  const [displayState, setDisplayState] = useState({
    categorySiderDisplay: true,
    cartSiderDisplay: false
  });
   
  return(
  	<Layout>
  	  <Sider
        width={240}
        collapsible={true}
        theme={"light"}
        trigger={null}
        collapsed={!displayState.categorySiderDisplay}
        style={{height:'100%'}}
      >
        <MenuComponent />
        {/*<div>
        <span
          onClick={() => setDisplayState({
            ...displayState,
            categorySiderDisplay: !displayState.categorySiderDisplay
          })}
        >toggle</span>
        </div>*/}
      </Sider>
      <Content>
        <Switch>
          {routes.map((route: RouteInterface, i: number) => {
            return RouteWithSubRoutes(route, i)
          })}
        </Switch>
      </Content>
  	</Layout>
  )
	
}