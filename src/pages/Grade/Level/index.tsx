/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-29 14:21:10
 * @LastEditTime: 2022-10-08 19:26:18
 * @FilePath: \CsuftSpiderFront\src\pages\Grade\Level\index.tsx
 */

import { API } from '@/services/ant-design-pro/typings';
import { Alert, Card } from 'antd';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { getLevelGrades } from '@/services/ant-design-pro/api';

const columns: ProColumns<API.LevelGradeListItem>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 38,
  },
  {
    title: '时间',
    dataIndex: 'date',
    ellipsis: true,
    width: 100,
    // width: 48,
    // align: 'center',
  },
  {
    title: '课程名称',
    width: 180,

    ellipsis: true,
    dataIndex: 'examName',
  },

  {
    title: '总分',
    align: 'center',

    ellipsis: true,
    width: 48,
    dataIndex: 'grade',
  },
];

export default () => {
  return (
    <>
      <ProTable<API.GradeListItem>
        columns={columns}
        cardBordered
        request={async (params = {}) => {
          const values = params as API.SearchGradeParams;

          const data = await getLevelGrades({ ...values });

          return {
            data: data,
          };
        }}
        rowKey="id"
        search={false}
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
    </>
  );
};
