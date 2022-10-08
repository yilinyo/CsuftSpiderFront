/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-29 14:21:10
 * @LastEditTime: 2022-10-08 18:59:56
 * @FilePath: \CsuftSpiderFront\src\pages\Grade\Term\index.tsx
 */

import { API } from '@/services/ant-design-pro/typings';

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { getTermGrades } from '@/services/ant-design-pro/api';
import { useRef, useState } from 'react';

import Gpa from '@/components/Gpa';
import { Alert } from 'antd';

const date = new Date();

let year = date.getFullYear();
year = year + 1;

const map: Map<string, object> = new Map();

for (let i = 1; i <= 6; i++) {
  const year1 = year;
  const year2 = year - 1;

  year--;

  const tmp1: string = year2 + '-' + year1 + '-1';
  const tmp2: string = year2 + '-' + year1 + '-2';
  map.set(tmp2, { text: tmp2 });
  map.set(tmp1, { text: tmp1 });
}

// const valueEnum: Map;

const valueEnum1 = map;

const columns: ProColumns<API.GradeListItem>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 38,
    hideInSearch: true,
  },
  {
    title: '时间',
    dataIndex: 'term',
    valueType: 'select',
    valueEnum: valueEnum1,

    ellipsis: true,
    width: 120,
    // width: 48,
    // align: 'center',
  },
  {
    title: '课程名称',
    width: 70,

    ellipsis: true,
    dataIndex: 'courseName',
    hideInSearch: true,
  },
  {
    title: '说明',
    width: 68,
    dataIndex: 'status',
    valueType: 'select',
    align: 'center',
    valueEnum: {
      0: { text: '正常', status: 'Success' },
      1: { text: '补考', status: 'Error' },
    },
    hideInSearch: true,
    ellipsis: true,
  },
  {
    title: '成绩',
    align: 'center',

    ellipsis: true,
    width: 68,
    dataIndex: 'grade',
    hideInSearch: true,
  },
  {
    title: '学分',
    width: 68,
    ellipsis: true,
    dataIndex: 'credit',
    hideInSearch: true,
  },

  {
    title: '绩点',
    width: 68,
    dataIndex: 'gradePoint',

    ellipsis: true,
    hideInSearch: true,
  },
  {
    title: '属性',
    width: 68,
    dataIndex: 'attribute',
    ellipsis: true,
    hideInSearch: true,
  },
];

export default () => {
  const [gpa, setGpa] = useState<string>('0');
  const [apf, setApf] = useState<string>('0');
  const [bp, setBp] = useState<string>('0');

  const fn = (newGpa: string, newApf: string, newBp: string) => {
    setGpa(newGpa);

    setApf(newApf);

    setBp(newBp);
  };

  return (
    <>
      <ProTable<API.GradeListItem>
        columns={columns}
        cardBordered
        request={async (params = {}) => {
          const values = params as API.SearchGradeParams;

          const data = await getTermGrades({ ...values });
          const gpa1 = data.gpa;

          const apf1 = data.apf;

          const bp1 = data.basicPoint;

          //更新
          fn(gpa1, apf1, bp1);
          return {
            data: data.gradeList,
          };
        }}
        rowKey="id"
        pagination={{
          pageSize: 12,
        }}
        dateFormatter="string"
        headerTitle={
          <>
            <Alert
              message={'右滑以查看更多'}
              type="success"
              showIcon
              style={{
                backgroundColor: 'white',
                borderColor: 'white',
                margin: -15,
                marginBottom: 13,
                top: 40,
              }}
            />
          </>
        }
      />
      <Gpa gpa={gpa} apf={apf} bp={bp}></Gpa>
    </>
  );
};
