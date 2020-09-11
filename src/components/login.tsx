import React,{ useState } from "react";
import { Button, Form, Input, Row, Col } from 'antd';
import { LoginEntity, createEmptyLogin } from "model/login";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
}

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = useState<LoginEntity>(
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
      <p style={{'color':'#999'}}>用户名:admin 密码:111111</p>
      <Form>
        <Form.Item
          label="用户名"
        >
          <Input 
            placeholder="请输入用户名" 
            value={loginInfo.login}
            onChange={onTexFieldChange("login")}
           />
        </Form.Item>

        <Form.Item
          label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
          hasFeedback
        >
          <Input 
            type="password" 
            autoComplete="off" 
            placeholder="请输入密码" 
            value={loginInfo.password}
            onChange={onTexFieldChange("password")}
           />
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={12}>
              <Button 
                style={{'width':'calc( 100% - 5px )'}}
                type="primary" 
                onClick={() => onLogin(loginInfo)}
               >确定</Button>
            </Col>
            <Col span={12} style={{'textAlign':'right'}}>
              <Button 
                style={{'width':'calc( 100% - 5px )'}}
                type="ghost" 
                onClick={() => setLoginInfo({login:'admin',password:'111111'})}
               >重置</Button>
            </Col>
          </Row>
          
          
        </Form.Item>
      </Form>
    </>
  );
};
