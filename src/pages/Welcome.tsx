/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-06 18:49:24
 * @LastEditTime: 2022-10-08 19:40:28
 * @FilePath: \CsuftSpiderFront\src\pages\Welcome.tsx
 */
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
import styles from './Welcome.less';
import { Link } from 'umi';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'当前版本 CSUFT SPIDER (正式版) V0.0.1'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a href="#" rel="noopener noreferrer">
            使用说明
          </a>
        </Typography.Text>
        <CodePreview>您可以免去 校园网/VPN 登录教务系统</CodePreview>
        <CodePreview>
          您可以查看并导出 <Link to={'/grade/all'}>学习成绩</Link>
        </CodePreview>
        <CodePreview>
          您可以可视化追踪 <Link to={'/grade/analysis'}>学习情况</Link>
        </CodePreview>
        <CodePreview>
          您可以便捷查看 <Link to={'/exam'}>考试安排</Link>
        </CodePreview>
        <CodePreview>
          您可以轻松查看 <Link to={'/course'}>课程信息</Link>
        </CodePreview>
        <CodePreview>我们不会对任何数据进行存储</CodePreview>
        <Typography.Text strong>
          <a href="#" rel="noopener noreferrer">
            其它说明
          </a>
        </Typography.Text>
        <CodePreview>本系统非官方教务系统</CodePreview>
        <CodePreview>
          本项目开源,需要请移步我的
          <a href="http://authserver.csuft.edu.cn/authserver/login?service=http%3A%2F%2Fjwgl.csuft.edu.cn%2F">
            Github
          </a>
        </CodePreview>
        <CodePreview>有问题或反馈请联系QQ或邮箱1322780122@qq.com</CodePreview>
      </Card>
      {/* {children} */}
    </PageContainer>
    // <PageContainer>{children}</PageContainer>
  );
};

export default Welcome;
