import Login from "page/user/login";
import { UserInfoComponent } from "page/user/userInfo";
import Main from "page/main";
import { Bus1,Bus2,Bus3,Bus4 } from "page/bus";
import SettingComponent from "page/setting";
import Set1 from "page/setting/set1";
import Set2 from "page/setting/set2";

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main,
    auth:true,
    routes: [
      {
        path: "/main/user-info",
        component: UserInfoComponent,
        exact: true,
        auth:true
      },
      {
        path: "/main/sub1",
        component: Bus1,
        exact: true,
        auth:true
      },
      {
        path: "/main/sub2",
        component: Bus2,
        exact: true,
        auth:true
      },
      {
        path: "/main/sub3",
        component: Bus3,
        exact: true,
        auth:true
      },
      {
        path: "/main/sub4",
        component: Bus4,
        exact: true,
        auth:true
      },
      {
        path: "/main/setting",
        component: SettingComponent,
        exact: true,
        auth:true,
        routes: [
          {
            path: "/main/setting/set1",
            component: Set1,
            exact: true,
            auth:true
          },
          {
            path: "/main/setting/set2",
            component: Set2,
            exact: true,
            auth:true
          }
        ]
      }
    ]
  }
];

export default routes;