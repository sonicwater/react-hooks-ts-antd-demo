import { LoginEntity } from 'model/login';

// 定义结果接口类型
interface resInterface {
  code: number;
  data: any;
  msg: string;
}

// 模拟延时
const delay = async (ms = 200) => {
  await new Promise((r) => setTimeout(r, ms));
}

export const Login = async (login:LoginEntity) => {

  // 调用延时
  await delay(1000);

  // 定义结果对象
  let res:resInterface = {code:0,data:{},msg:""};

  // 判断登陆逻辑
  if(
    login.login == 'admin' && 
    login.password == '111111'
   ){
   	// 成功
    res.code = 0;
	res.data = {
	  message: "登陆成功",
	  user_id: 1001
	};
	res.msg = "success";
  }else{
  	// 失败
  	res.code = 401;
	res.data = { message: "登陆失败，用户名或密码错误" };
	res.msg = "failed";
  }
  return res;
}