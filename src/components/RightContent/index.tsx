/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-28 20:51:18
 * @LastEditTime: 2022-10-08 19:44:06
 * @FilePath: \CsuftSpiderFront\src\components\RightContent\index.tsx
 */
import { outLogin } from '@/services/ant-design-pro/api';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import HeaderSearch from '../HeaderSearch';
import Avatar from './AvatarDropdown';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';
import { history, useModel } from 'umi';
import { stringify } from 'querystring';
import { Button } from 'antd';


const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const loginOut = async () => {
    localStorage.removeItem('sidSpider')
    localStorage.removeItem('pwdSpider')
    await outLogin();
    const { query = {}, search, pathname } = history.location;
    const { redirect } = query;
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="#">csuft spider</a>,
            value: 'csuft spider',
          },
          {
            label: <a href="next.ant.design">yilin 开源</a>,
            value: 'yilin 开源',
          },
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
         <Avatar />
      {/* <span
        style={{}}
        className={styles.action}
        onClick={loginOut}
      >
        退出
      </span> */}
      <Button type="primary" shape="round"  size='small' onClick={loginOut}>
        退出
      </Button>
   
    </Space>
  );
};

export default GlobalHeaderRight;
