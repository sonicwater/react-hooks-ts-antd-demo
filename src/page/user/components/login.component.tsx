import * as React from "react";
import { Button, Form, Input } from 'antd';
import { LoginEntity, createEmptyLogin } from "../model/login";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
}

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );

  const onTexFieldChange = (fieldId:string) => (e:any) => {
    setLoginInfo({
      ...loginInfo,
      [fieldId]: e.target.value
    });
  };

  return (
    <>
      <Form>
        <Form.Item
          label="用户名"
        >
          <Input 
            placeholder="请输入用户名:admin" 
            value={loginInfo.login}
            onChange={onTexFieldChange("login")}
           />
        </Form.Item>

        <Form.Item
          label="密码"
          hasFeedback
        >
          <Input 
            type="password" 
            autoComplete="off" 
            placeholder="请输入密码:123456" 
            value={loginInfo.password}
            onChange={onTexFieldChange("password")}
           />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={() => onLogin(loginInfo)}>确定</Button>
          <Button type="ghost">重置</Button>
        </Form.Item>
      </Form>
    </>
  );
};
