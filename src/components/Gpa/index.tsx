/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-29 22:17:03
 * @LastEditTime: 2022-10-03 14:23:17
 * @FilePath: \CsuftSpiderFront\src\components\Gpa\index.tsx
 */

import { Alert, Card, Col, Row, Statistic } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';
import React from 'react';
import Marquee from 'react-fast-marquee';
// const Gpa: React.FC = (gpa: number, apf: number) => (
//   <Row gutter={16}>
//     <Col span={12}>
//       <Statistic title="平均绩点" value={gpa} />
//     </Col>
//     <Col span={12}>
//       <Statistic title="平均分" value={apf} />
//     </Col>
//   </Row>
// );

export default (props: {
  bp: valueType | undefined;
  gpa: valueType | undefined;
  apf: valueType | undefined;
}) => {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="平均绩点" value={props.gpa} />
        </Col>
        <Col span={8}>
          <Statistic title="平均分" value={props.apf} />
        </Col>
        <Col span={8}>
          <Statistic title="学业基本分" value={props.bp} />
        </Col>
      </Row>
      <Alert
        message={
          <Marquee pauseOnHover gradient={false}>
            学业基本分计算规则是统计必修课和限定选修课（∑（单科成绩×课程学分）÷
            ∑各课学分）,其它均以百分制计算必修课，绩点满绩5.0。
          </Marquee>
        }
        banner
        style={{
          fontSize: '12px',
          margin: -15,
          marginBottom: 13,
          top: 24,
        }}
      />
    </Card>
  );
};
