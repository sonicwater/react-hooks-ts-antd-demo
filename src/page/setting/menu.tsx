import React,{ useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, MenuOutlined, FileOutlined } from '@ant-design/icons';
// const { SubMenu } = Menu;

// interface PropsNav {
//   cur:string
// }

export const MenuComponent: React.FC<any> = (props) => {

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
    if(history.location.pathname.indexOf('main/setting/set1')>0){
      setCurrent('set1');
    }
    if(history.location.pathname.indexOf('main/setting/set2')>0){
      setCurrent('set2');
    }
  },[history.location.pathname]);
	
  return (
	<Menu
	  onClick={handleClick} 
	  selectedKeys={[current]}
    >
	  {/*<SubMenu key="setting" icon={<MenuOutlined />} title="层级菜单">*/}
	    <Menu.ItemGroup key="s1" title="设置选项">
	      <Menu.Item key="set1">
	      	<Link to="/main/setting/set1">设置一</Link>
	      </Menu.Item>
	      <Menu.Item key="set2">
	        <Link to="/main/setting/set2">设置二</Link>
	      </Menu.Item>
	    </Menu.ItemGroup>
	  {/*</SubMenu>*/}
	</Menu>
  )
}