/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-06 18:49:24
 * @LastEditTime: 2022-09-21 11:35:57
 * @FilePath: \myapp\src\pages\Admin.tsx
 */

import { PageHeaderWrapper } from '@ant-design/pro-components';

import React from 'react';

const Admin: React.FC = ({ children }) => {
  return <PageHeaderWrapper>{children}</PageHeaderWrapper>;
};

export default Admin;
