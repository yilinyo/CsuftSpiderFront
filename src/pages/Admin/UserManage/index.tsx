/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-19 18:48:20
 * @LastEditTime: 2022-09-29 21:13:51
 * @FilePath: \CsuftSpiderFront\src\pages\Admin\UserManage\index.tsx
 */

// import React, { useRef } from 'react';

// import type { ProColumns, ActionType } from '@ant-design/pro-table';
// import ProTable, { TableDropdown } from '@ant-design/pro-table';

// import { searchUsers } from '@/services/ant-design-pro/api';
// import { Image } from 'antd';
// import { isNull } from 'lodash';
// import type { API } from '@/services/ant-design-pro/typings';

// const columns: ProColumns<API.CurrentUser>[] = [
//   {
//     dataIndex: 'id',
//     valueType: 'indexBorder',
//     width: 48,
//   },
//   {
//     title: '用户名',
//     dataIndex: 'username',
//     copyable: true,
//     ellipsis: true,
//   },
//   {
//     title: '用户账户',
//     dataIndex: 'userAccount',
//     copyable: true,
//   },
//   {
//     title: '用户头像',
//     dataIndex: 'avatarUrl',
//     search: false,
//     render: (_, record) => (
//       <div>
//         <Image
//           src={isNull(record.avatarUrl) ? 'error' : record.avatarUrl}
//           width={40}
//           height={40}
//           fallback="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png"
//         />
//       </div>
//     ),
//   },
//   {
//     title: '性别',
//     dataIndex: 'gender',

//     valueType: 'select',
//     valueEnum: {
//       0: { text: '男', status: 'Default' },
//       1: { text: '女', status: 'Default' },
//     },
//   },
//   {
//     title: '电话',
//     dataIndex: 'phone',
//     copyable: true,
//   },
//   {
//     title: '邮件',
//     dataIndex: 'email',
//     copyable: true,
//   },
//   {
//     title: '状态',
//     dataIndex: 'userStatus',
//     valueType: 'select',
//     valueEnum: {
//       0: { text: '正常', status: 'Success' },
//       1: { text: '异常', status: 'Error' },
//     },
//   },
//   {
//     title: '角色',
//     dataIndex: 'userRole',
//     valueType: 'select',
//     valueEnum: {
//       0: { text: '普通用户', status: 'Default' },
//       1: { text: 'VIP用户', status: 'Error' },
//       2: {
//         text: '管理员',
//         status: 'Success',
//       },
//     },
//   },
//   {
//     title: '创建时间',
//     dataIndex: 'creatTime',
//     valueType: 'dateTime',
//   },
//   // {
//   //   disable: true,
//   //   title: '状态',
//   //   dataIndex: 'state',

//   //   filters: true,
//   //   onFilter: true,
//   //   valueType: 'select',
//   //   valueEnum: {
//   //     all: { text: '全部', status: 'Default' },
//   //     open: {
//   //       text: '未解决',

//   //       status: 'Error',
//   //     },
//   //     closed: {
//   //       text: '已解决',
//   //       status: 'Success',
//   //       disabled: true,
//   //     },
//   //     processing: {
//   //       text: '解决中',
//   //       status: 'Processing',
//   //     },
//   //   },
//   // },

//   // {
//   //   disable: true,
//   //   title: '标签',
//   //   dataIndex: 'labels',
//   //   search: false,
//   //   renderFormItem: (_, { defaultRender }) => {
//   //     return defaultRender(_);
//   //   },
//   //   render: (_, record) => (
//   //     <Space>
//   //       {record.labels.map(({ name, color }) => (
//   //         <Tag color={color} key={name}>
//   //           {name}
//   //         </Tag>
//   //       ))}
//   //     </Space>
//   //   ),
//   // },

//   {
//     title: '操作',
//     valueType: 'option',
//     key: 'option',
//     render: (text, record, _, action) => [
//       <a
//         key="editable"
//         onClick={() => {
//           action?.startEditable?.(record.id);
//         }}
//       >
//         编辑
//       </a>,
//       <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
//         查看
//       </a>,
//       <TableDropdown
//         key="actionGroup"
//         onSelect={() => action?.reload()}
//         menus={[
//           { key: 'copy', name: '复制' },
//           { key: 'delete', name: '删除' },
//         ]}
//       />,
//     ],
//   },
// ];

// export default () => {
//   const actionRef = useRef<ActionType>();
//   return (
//     <ProTable<API.CurrentUser>
//       columns={columns}
//       actionRef={actionRef}
//       cardBordered
//       request={async (params = {}) => {
//         console.log(params);

//         const values = params as API.SearchParams;

//         const userList = await searchUsers({ ...values });

//         return {
//           data: userList,
//         };
//       }}
//       editable={{
//         type: 'multiple',
//       }}
//       columnsState={{
//         persistenceKey: 'pro-table-singe-demos',
//         persistenceType: 'localStorage',
//         onChange(value) {
//           console.log('value: ', value);
//         },
//       }}
//       rowKey="id"
//       search={{
//         labelWidth: 'auto',
//       }}
//       form={{
//         // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
//         syncToUrl: (values, type) => {
//           if (type === 'get') {
//             return {
//               ...values,
//               created_at: [values.startTime, values.endTime],
//             };
//           }
//           return values;
//         },
//       }}
//       pagination={{
//         pageSize: 5,
//       }}
//       dateFormatter="string"
//       headerTitle="用户列表"
//     />
//   );
// };
