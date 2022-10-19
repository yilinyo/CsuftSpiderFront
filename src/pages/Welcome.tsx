/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-06 18:49:24
 * @LastEditTime: 2022-10-19 22:16:40
 * @FilePath: \CsuftSpiderFront\src\pages\Welcome.tsx
 */
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography, Badge } from 'antd';

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
      <Alert
        message={'当前版本 CSUFT SPIDER (正式版) V0.0.2'}
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Card>
        <Badge.Ribbon text="Tips" placement="start">
          <Card
            style={{ marginBottom: '15px' }}
            title={
              <Typography.Text strong style={{ paddingLeft: '30px' }}>
                <a href="#" rel="noopener noreferrer">
                  使用说明 (仅评教后才能使用！)
                </a>
              </Typography.Text>
            }
            size="small"
          >
            <CodePreview>您可以免去 校园网/VPN</CodePreview>
            <CodePreview>自动免密登录处理</CodePreview>
            <Link to={'/grade/all'}>
              <CodePreview>
                <a>点我查看学习成绩(支持导出PDF)📄 </a>
              </CodePreview>
            </Link>
            <Link to={'/grade/analysis'}>
              <CodePreview>
                <a>点我可视化追踪学习情况📈</a>
              </CodePreview>
            </Link>
            <Link to={'/exam'}>
              <CodePreview>
                <a>点我便捷查看考试安排👀</a>
              </CodePreview>
            </Link>
            <Link to={'/course'}>
              <CodePreview>
                <a>点我轻松查看课程信息💻</a>
              </CodePreview>
            </Link>
            <CodePreview>点击左上角蜘蛛旁边按钮唤起导航栏</CodePreview>
          </Card>
        </Badge.Ribbon>

        <Badge.Ribbon text="Tips" placement="start" color="pink">
          <Card
            style={{ marginBottom: '15px' }}
            title={
              <Typography.Text strong style={{ paddingLeft: '30px' }}>
                <a href="#" rel="noopener noreferrer">
                  其它说明
                </a>
              </Typography.Text>
            }
            size="small"
          >
            <CodePreview>本系统非官方教务系统</CodePreview>
            <CodePreview>我们不会对任何数据进行存储</CodePreview>
            <CodePreview>
              本项目开源,需要请移步我的
              <a href="https://github.com/yilinyo/CsuftSpiderBackend">Github</a>
            </CodePreview>
            <CodePreview>有问题或反馈请联系QQ或邮箱1322780122@qq.com</CodePreview>
          </Card>
        </Badge.Ribbon>

        <Badge.Ribbon text="Tips" placement="start" color="green">
          <Card
            style={{ marginBottom: '15px' }}
            title={
              <Typography.Text strong style={{ paddingLeft: '30px' }}>
                <a href="#" rel="noopener noreferrer">
                  更新说明
                </a>
              </Typography.Text>
            }
            size="small"
          >
            <CodePreview>加强了网站安全性</CodePreview>
            <CodePreview>增加免密登录</CodePreview>
          </Card>
        </Badge.Ribbon>
      </Card>
      {/* {children} */}
    </PageContainer>
    // <PageContainer>{children}</PageContainer>
  );
};

export default Welcome;
