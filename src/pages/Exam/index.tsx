import { API } from '@/services/ant-design-pro/typings';
import { Alert } from 'antd';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { getExams } from '@/services/ant-design-pro/api';

const columns: ProColumns<API.GradeListItem>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 38,
  },
  {
    title: '课程名称',
    dataIndex: 'name',
    ellipsis: true,
    width: 90,
    // width: 48,
    // align: 'center',
  },
  {
    title: '考试地点',
    width: 160,

    ellipsis: true,
    dataIndex: 'location',
  },
  {
    title: '时间',
    width: 68,
    dataIndex: 'date',

    align: 'center',

    ellipsis: true,
  },
];

export default () => {
  return (
    <>
      <ProTable<API.GradeListItem>
        columns={columns}
        cardBordered
        request={async (params = {}) => {
          const values = params as API.SearchExamParams;

          const data = await getExams({ ...values });

          return {
            data: data,
          };
        }}
        rowKey="id"
        search={false}
        headerTitle={
          <>
            <Alert
              message={'点击内容以查看更多'}
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
        pagination={{
          pageSize: 12,
        }}
        dateFormatter="string"
      />
    </>
  );
};
