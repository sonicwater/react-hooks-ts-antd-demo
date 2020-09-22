import React,{ useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, MenuOutlined, FileOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

// interface PropsNav {
//   cur:string
// }

export const NavComponent: React.FC<any> = (props) => {

  // const {routes} = props;
  let history = useHistory();

  const [current,setCurrent] = useState<string>('');

  const handleClick = (e:any) => {
    console.log(e);
    setCurrent(e.key);
  }

  // 默认导航当前选中样式
  useEffect(()=>{
    setCurrent('');
    if(history.location.pathname.indexOf('main/sub1')>0){
      setCurrent('mail');
    }
    if(history.location.pathname.indexOf('main/sub2')>0){
      setCurrent('file');
    }
    if(history.location.pathname.indexOf('main/sub3')>0){
      setCurrent('sub3');
    }
    if(history.location.pathname.indexOf('main/sub4')>0){
      setCurrent('sub4');
    }
  },[history.location.pathname]);
	
  return (
    <div style={{float:'left',marginLeft:'50px'}}>
    {/*{JSON.stringify(history)}*/}
      <Menu
        onClick={handleClick} 
        selectedKeys={[current]} 
        mode="horizontal"
        style={{height:'65px'}}
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link to="/main/sub1">Sub 1</Link>
        </Menu.Item>
        <Menu.Item key="file" icon={<FileOutlined />}>
          <Link to="/main/sub2">Sub 2</Link>
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          禁用示例
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<MenuOutlined />} title="层级菜单">
          <Menu.ItemGroup title="选项一">
            <Menu.Item key="sub3">
              <Link to="/main/sub3">Sub 3</Link>
            </Menu.Item>
            <Menu.Item key="sub4">
              <Link to="/main/sub4">Sub 4</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="/main/sub2" target="_self" rel="noopener noreferrer">
            链接跳转Sub 2
          </a>
        </Menu.Item>
      </Menu>
    </div>
  )
}