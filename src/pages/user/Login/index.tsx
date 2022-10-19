import Footer from '@/components/Footer';
import { login } from '@/services/ant-design-pro/api';
import { API } from '@/services/ant-design-pro/typings';
import sm4 from '@/utils/sm4';
import { useEffect } from 'react';

//import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  // AlipayCircleOutlined,
  LockOutlined,
  // MobileOutlined,
  // TaobaoCircleOutlined,
  UserOutlined,
  //WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  //ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';

import { Alert, message, Tabs } from 'antd';

import React, { useState } from 'react';
import { history, useModel } from 'umi';
import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  useEffect(() => {

    (async () => {
      if (localStorage.getItem('sidSpider') && localStorage.getItem('pwdSpider')) {
        await handleSubmit({sid:localStorage.getItem('sidSpider'),pwd:localStorage.getItem('pwdSpider')} as API.LoginParams);
      }
    })()

  }, []) // 第二个参数为空时只会在第一次渲染时执行



  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s) => ({ ...s, currentUser: userInfo }));
    }
  };


  let loginTimes = localStorage.getItem('loginTimes') || 0;
  let time = 30;
  let timer;
  const handleSubmit = async (values: API.LoginParams) => {
    try {
      if (loginTimes >= 5 && !timer) {
        timer = setTimeout(() => {
          loginTimes = 0;
          localStorage.setItem('loginTimes', loginTimes);
          clearTimeout(timer);
          timer = null;
          time = 30;
          clearInterval(timer2);
        }, 30000);

        let timer2 = setInterval(() => {
          time--;
        }, 1000);
        return message.error(`登录次数过多,请耐心等待${time}秒后登录`);
      } else if (timer) {
        return message.error(`登录次数过多,请耐心等待${time}秒后登录`);
      }

      // 登录

      const user = await login({ ...values, type });

      if (user) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        message.info('没有完成教师评教请先评教，已评教可以忽略');
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */

        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as {
          redirect: string;
        };
        history.push('/welcome');

        localStorage.setItem('sidSpider',values.sid)
        localStorage.setItem('pwdSpider',values.pwd)

        return;
      } else {
        // message.error('用户名或密码错误！');
        loginTimes++;
        localStorage.setItem('loginTimes', loginTimes);
      }

      console.log(user); // 如果失败去设置用户错误信息

      // setUserLoginState(user);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  const { status, type: loginType } = userLoginState;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          // "/logo.svg"
          logo={<img alt="logo" src="/logo.svg" />}
          title="CSUFT SPIDER"
          subTitle={'无需校园网、VPN即可访问'}
          initialValues={{
            autoLogin: true,
            sid: localStorage.getItem('sidSpider') || '',
            pwd: localStorage.getItem('pwdSpider') || ''
          }}
          onFinish={async (values) => {
            // 加密
            if(!localStorage.getItem('pwdSpider')){
              values.pwd = sm4.encrypt(values.pwd);
            }
            await handleSubmit(values as API.LoginParams);
          }}

        // }}
        >
          <p style={{ textAlign: 'center' }}>
            <a
              href="https://www.bilibili.com/video/BV1Z84y1B7oi/?vd_source=902a49293b44e3cb324f388ff3f9ab80"
              target="_blank"
              rel="noreferrer"
            >
              (完成教师评教再登陆）如何使用,点我看介绍视频❤
            </a>
          </p>
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'学号密码登录'} />
          </Tabs>

          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的账号和密码'} />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="sid"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入学号'}
                rules={[
                  {
                    required: true,
                    message: '学号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="pwd"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}

                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              href="http://authserver.csuft.edu.cn/authserver/login?service=http%3A%2F%2Fjwgl.csuft.edu.cn%2F"
              style={{
                float: 'right',
              }}
            >
              CSUFT官方教务系统
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
