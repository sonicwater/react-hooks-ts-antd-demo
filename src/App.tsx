import React,{ useReducer } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router';
import { RouteWithSubRoutes } from './components/route';
import { RouteInterface } from './model/route';
import 'antd/dist/antd.css';


import { InitialState, Reducer } from 'reducers/reducers';
import { Dispatch, Global } from 'components/context';
import { LOG_IN, LOG_OUT } from 'reducers/reducers';


const App: React.FC = () => {

  const [global, dispatch] = useReducer(Reducer, InitialState);

  return (
    <Dispatch.Provider value={{ dispatch }}>
      <Global.Provider value={{ global }}>
        <Router>
          <Switch>
            {routes.map((route: RouteInterface, i: number) => {
              return RouteWithSubRoutes(route, i)
            })}
          </Switch>
        </Router>
      </Global.Provider>
    </Dispatch.Provider>
  );
}

export default App;
