import React,{ useState, useEffect } from "react";

import style from "./setting.module.scss";
import { SettingTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
interface PropsMenu {
  
}

export const SettingBarComponent: React.FC<PropsMenu> = (props) => {
  return(
  	<Tooltip placement="left" title="设置">
  	  <Link to="/main/setting/set1">
  	  	<SettingTwoTone className={style['setting-icon']} />
  	  </Link>
  	</Tooltip>
  )
}
