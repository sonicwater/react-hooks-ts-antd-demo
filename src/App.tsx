import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Link
} from 'react-router-dom';
import routes from './router';
import { RouteWithSubRoutes } from './assets/common';
import { RouteInterface } from './assets/interface';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <Router>
      <>
        {/*<header className="App-header">
          <ul>
            <li><Link to="/login">登陆页</Link></li>
            <li><Link to="/main">主页</Link></li>
          </ul>
        </header>*/}

        <Switch>
          {routes.map((route: RouteInterface, i: number) => {
            return RouteWithSubRoutes(route, i)
          })}
        </Switch>

      </>
    </Router>
  );
}

export default App;
