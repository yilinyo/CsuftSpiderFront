/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-29 14:21:10
 * @LastEditTime: 2022-10-08 20:00:21
 * @FilePath: \CsuftSpiderFront\src\pages\Grade\Basic\index.tsx
 */
/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-29 14:21:10
 * @LastEditTime: 2022-10-06 17:29:01
 * @FilePath: \CsuftSpiderFront\src\pages\Grade\Basic\index.tsx
 */

import { API } from '@/services/ant-design-pro/typings';
import { Alert, Button, message } from 'antd';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { getAllGrades, getPdf } from '@/services/ant-design-pro/api';
import { useState } from 'react';

import Gpa from '@/components/Gpa';

const columns: ProColumns<API.GradeListItem>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 38,
  },
  {
    title: '学期',
    dataIndex: 'term',
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

    ellipsis: true,
  },
  {
    title: '成绩',
    align: 'center',

    ellipsis: true,
    width: 68,
    dataIndex: 'grade',
  },
  {
    title: '学分',
    width: 68,
    ellipsis: true,
    dataIndex: 'credit',
  },

  {
    title: '绩点',
    width: 68,
    dataIndex: 'gradePoint',

    ellipsis: true,
  },
  {
    title: '属性',
    width: 68,
    dataIndex: 'attribute',
    ellipsis: true,
  },
];

export default () => {
  const [gpa, setGpa] = useState<string>('0');
  const [apf, setApf] = useState<string>('0');
  const [bp, setBp] = useState<string>('0');
  const [isClick, setClick] = useState<boolean>(true);

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

          const data = await getAllGrades({ ...values });

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
        search={false}
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
        pagination={{
          pageSize: 12,
        }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            id="but"
            onClick={() => {
              if (isClick) {
                if (/MicroMessenger/i.test(window.navigator.userAgent)) {
                  message.error('微信不支持导出，请在其它浏览器打开');
                  return;
                }
                setClick(false);
                message.loading('正在导出，请稍后');
                getPdf().then((res) => {
                  const fileName1: string = res.response.headers.get('content-disposition');

                  const i = fileName1?.indexOf('%');

                  const j = fileName1?.lastIndexOf('"');

                  const fileName = fileName1?.substring(i, j);

                  const { data } = res;

                  // const fileName = res.headers
                  //   .get('content-disposition')
                  //   .replace(/\w+;filename=(.*)/, '$1');
                  // console.log(fileName);

                  // console.log(headers);

                  // 此处当返回json文件时需要先对data进行JSON.stringify处理，其他类型文件不用做处理
                  // const blob = new Blob([JSON.stringify(data)], ...)
                  const blob = new Blob([data], { type: 'application/pdf' });
                  const dom = document.createElement('a');
                  const url = window.URL.createObjectURL(blob);
                  dom.href = url;
                  dom.download = decodeURI(fileName);
                  dom.style.display = 'none';
                  document.body.appendChild(dom);
                  dom.click();
                  dom.parentNode.removeChild(dom);
                  window.URL.revokeObjectURL(url);

                  setTimeout(function () {
                    // 设置延迟事件，5秒后将执行

                    setClick(true);
                  }, 5000);
                });
              }
            }}
          >
            导出
          </Button>,
        ]}
      />

      <Gpa gpa={gpa} apf={apf} bp={bp}></Gpa>
    </>
  );
};
