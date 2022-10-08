/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-30 20:39:52
 * @LastEditTime: 2022-10-07 23:02:57
 * @FilePath: \CsuftSpiderFront\src\pages\Grade\Analysis\index.tsx
 */
import Page from '@/components/GpaCharts/BrokenLine';
import { currentUser, getAnalysis } from '@/services/ant-design-pro/api';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useEffect, useState } from 'react';
import { valueType } from 'antd/lib/statistic/utils';
import initialState from '@/.umi/plugin-initial-state/models/initialState';
import { Avatar } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

export default () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const d = date.getDay();
  const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const time =
    year.toString() + '年' + month.toString() + '月' + day.toString() + '日   ' + weekday[d];

  const [responsive, setResponsive] = useState(false);
  const [dataYear, setDataYear] = useState([]);
  const [dataTerm, setDataTerm] = useState([]);
  const [allApf, setAllApf] = useState<valueType | undefined>(0);
  const [allGpa, setAllGpa] = useState<valueType | undefined>(0);
  const [allCredit, setCredit] = useState<valueType | undefined>(0);

  const [sid, setSid] = useState<valueType | undefined>(0);

  useEffect(() => {
    getAnalysis().then((response) => {
      setDataYear(response.yearList);
      setDataTerm(response.termList);
      setCredit(response.allCredit);
      setAllGpa(response.allGpa);
      setAllApf(response.allApf);
      setSid(response.sid);
    });
  }, []);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset: { width: number }) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="数据详情"
        extra={time}
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard>
                <Avatar size={64} src={'/spiderman.svg'} />
                <a style={{ fontSize: '16px' }}>{sid}</a>
              </StatisticCard>
              <StatisticCard
                statistic={{
                  title: '已修学分',
                  value: allCredit,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '平均绩点(GPA)',
                  value: allGpa,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '平均成绩(APF)',
                  value: allApf,
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard title="学期绩点分析" chart={<Page data={dataTerm} />} />
        </ProCard>
        <StatisticCard title="学年绩点分析" chart={<Page data={dataYear} />} />
      </ProCard>
    </RcResizeObserver>
  );
};
