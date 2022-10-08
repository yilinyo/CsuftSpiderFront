/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-10-02 14:41:13
 * @LastEditTime: 2022-10-04 17:33:25
 * @FilePath: \CsuftSpiderFront\src\components\GpaCharts\BrokenLine\index.tsx
 */
import React, { useState } from 'react';

import { Line } from '@ant-design/plots';

const Page = (props: { data: [] | undefined }) => {
  // const [data, setDataForm] = useState([]);

  // const [allApf, setAllApf] = useState<string>('0');
  // const [allGpa, setAllGpa] = useState<string>('0');
  // const [allCredit, setCredit] = useState<string>('0');

  const data = props.data;

  const config = {
    data,
    xField: 'time',
    yField: 'gpa',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};
export default Page;
