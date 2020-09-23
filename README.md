# React + Hooks + TypeScript + Ant Design Demo 项目

![Node][node] ![React][react] ![Ts][ts] ![Antd][antd] ![Scss][scss]

[node]: https://img.shields.io/badge/node-v12.13.1-%2343853d
[react]: https://img.shields.io/badge/react-%5E16.13.1-blue
[ts]: https://img.shields.io/badge/typescript-~3.7.2-%233178c6
[antd]: https://img.shields.io/badge/antd-%5E4.6.2-%23008dff
[scss]: https://img.shields.io/badge/node--sass-%5E4.14.1-%23bf4080

> **Node:** 本地node版本v12.13.1
> **React:** 应用使用Create React App 脚手架构建
> **Hooks:** react 16.13.1版本 支持Hooks API，本项目全部使用此API
> **Typescript:** 创建项目时应用ts版本
> **Scss:** 项目配置了Scss设置样式
## 安装
```bash
$ git clone https://github.com/sonicwater/react-hooks-ts-antd-demo.git
```
```bash
$ cd react-hooks-ts-antd-demo
```
```bash
$ npm install
```
```bash
$ npm run start
```

## 项目目录
```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── api
│   │   └── api.ts
│   ├── components
│   │   ├── context.tsx
│   │   ├── login.tsx
│   │   └── route.tsx
│   ├── index.tsx
│   ├── model
│   │   ├── login.ts
│   │   └── route.ts
│   ├── page
│   │   ├── bus
│   │   │   └── index.tsx
│   │   ├── layout
│   │   │   ├── account.module.scss
│   │   │   ├── account.tsx
│   │   │   ├── header.module.scss
│   │   │   ├── header.tsx
│   │   │   ├── nav.tsx
│   │   │   ├── setting.module.scss
│   │   │   └── setting.tsx
│   │   ├── main.module.scss
│   │   ├── main.tsx
│   │   ├── setting
│   │   │   ├── index.tsx
│   │   │   ├── menu.tsx
│   │   │   ├── set1.tsx
│   │   │   └── set2.tsx
│   │   └── user
│   │       ├── login.module.scss
│   │       ├── login.tsx
│   │       └── userInfo.tsx
│   ├── react-app-env.d.ts
│   ├── reducers
│   │   └── reducers.tsx
│   ├── router
│   │   └── index.ts
│   ├── serviceWorker.ts
│   ├── setupTests.ts
│   └── static
│       ├── images
│       │   └── logo.svg
│       └── styles
│           └── index.scss
├── tsconfig.json
└── yarn.lock
```

## 目录说明

* 项目ts配置文件  <b><font color='#008dff'> /tsconfig.json </font></b>，"baseUrl": "src" 配置了引入文件的基本目录为src
 ```json
 {
  "compilerOptions": {
    ...
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
 ```

 * 路由配置文件 <b><font color='#008dff'>/src/router/index.ts </font></b>，里面会引入 <b><font color='#008dff'> /src/page </font></b> 目录下的很多页面文件当作对应路由的组件，最后导出一个json数组
 * 组件文件夹 <b><font color='#008dff'>/src/components</font></b> 里面存的各种组件
 * <b><font color='#008dff'>/src/model</font></b> 文件夹中存放公共接口文件
 * <b><font color='#008dff'>/src/page</font></b> 里存放各种业务级页面，需要注意，脚手架自动配置了<font color='#bf4080'>css modules</font>，例如：main.tsx引入scss文件时，代码如下，scss文件的命名为<font color='#bf4080'>main.module.scss</font>，中间带上<font color='#bf4080'>module</font>
 ```javascript
 import style from './main.module.scss';
 ```
* <b><font color='#008dff'>/src/reducers</font></b> 文件夹存放公共reducer，本项目目前仅用于登陆状态。
*  <b><font color='#008dff'>/src/static</font></b> 存放各种静态资源
* <b><font color='#008dff'>/src/api</font></b> 中保存处理接口调用的配置，本项目目前纯静态演示，没有配置axios之类的接口调用依赖。api.ts中通过调用setTimeout延时模拟了接口的异步特性。

## 项目说明 
入口文件 <b><font color='#008dff'>/src/App.tsx</font></b> 

中引入了：
 ```javascript
import routes from './router';
import { RouteWithSubRoutes } from './components/route';
import { RouteInterface } from './model/route';

...
	  <Router>
	    <Switch>
	      <Redirect exact from="/" to="/login" />
	      {routes.map((route: RouteInterface, i: number) => {
	        return RouteWithSubRoutes(route, i)
	      })}
	    </Switch>
	  </Router>
  ...
 ```
* 路由配置文件 <font color='#cd2101'>routes</font>
* 组件中的路由模板 <font color='#cd2101'> RouteWithSubRoutes </font>
* 和路由通用接口 <font color='#cd2101'> RouteInterface </font>
* <font color='#cd2101'>Redirect</font> 设置路由请求 "/" 时重定向到 "/login" 登陆路由
* <font color='#cd2101'>routes.map</font> 遍历了路由配置文件，返回<font color='#cd2101'>RouteWithSubRoutes</font> 路由组件模板


接着引入了：
 ```javascript
import { InitialState, Reducer } from 'reducers/reducers';
import { Dispatch, Global } from 'components/context';
import { LOG_IN, LOG_OUT } from 'reducers/reducers';
 ```
* <b><font color='#008dff'>/src/reducers/reducers</font></b> 中的状态初始值 <font color='#cd2101'>InitialState</font> 和 <font color='#cd2101'>Reducer</font>方法（目前该方法用于登陆登出）
* 引入组件中的 <font color='#cd2101'>Dispatch, Global</font> 分发和初始状态值，由于 <font color='#cd2101'>Hooks API</font> 的特性，本项目使用<font color='#cd2101'>useReducer</font> 和 <font color='#cd2101'>useContext</font> 接合的方式替代传统的 <font color='#999'>Redux</font> 

 ```javascript
const [global, dispatch] = useReducer(Reducer, InitialState);
return (
    <Dispatch.Provider value={{ dispatch }}>
      <Global.Provider value={{ global }}>
        // ...
      </Global.Provider>
    </Dispatch.Provider>
  );
 ```
 * <font color='#cd2101'>useReducer</font> 方法定义 <font color='#cd2101'>global, dispatch</font>，通过<font color='#cd2101'><Dispatch.Provider value={{ dispatch }}></font> 和 <font color='#cd2101'><Global.Provider value={{ global }}></font> 在最外层包裹视图层内部组件，让子组件获取context中定义的状态和方法。
 
 
> 项目地址: [https://github.com/sonicwater/react-hooks-ts-antd-demo](https://github.com/sonicwater/react-hooks-ts-antd-demo)