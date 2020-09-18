import React,{ useState } from "react";
import { Menu } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

interface PropsMenu {
  onClickMenuItem: () => void;
}



export const MenuComponent: React.FC<PropsMenu> = (props) => {
  return (
    <>
      menu MessageOutlined
      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
    </>
  )
}