/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-21 16:53:09
 * @LastEditTime: 2022-09-22 21:59:26
 * @FilePath: \myapp\src\pages\Index\service.ts
 */
import { request } from 'umi';
import type { Params, ListItemDataType } from './data';

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[]; params } }> {
  const res = request('/api/fake_list', {});

  return res;
}
