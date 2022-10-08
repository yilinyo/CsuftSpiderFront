import { Response } from 'express';
import { RcResizeObserver } from 'rc-resize-observer';
/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-06 18:49:24
 * @LastEditTime: 2022-10-08 18:20:43
 * @FilePath: \CsuftSpiderFront\src\services\ant-design-pro\api.ts
 */
// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globleRequest';
import { API } from './typings';

/** 获取当前的用户 GET /api/user/getCurrent */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/getCurrent', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户成绩分析 GET /api/grade/getAnalysis */
export async function getAnalysis(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/grade/getAnalysis', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterResult>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索全部成绩 GET /api/grade/getAll*/
export async function getAllGrades(body: API.SearchGradeParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.GradeListItem>>('/api/grade/getAll', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索全部成绩 GET /api/exam/getTerm*/
export async function getExams(body: API.SearchGradeParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.GradeListItem>>('/api/exam/getTerm', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索全部等级考试成绩 GET /api/grade/getLevel*/
export async function getLevelGrades(
  body: API.SearchGradeParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse<API.GradeListItem>>('/api/grade/getLevel', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索学年成绩 POST /api/grade/getTerm*/

export async function getTermGrades(body: API.SearchGradeParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.GradeListItem>>('/api/grade/getTerm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 搜索学年成绩 POST /api/grade/getYear*/

export async function getYearGrades(body: API.SearchGradeParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.GradeListItem>>('/api/grade/getYear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 成绩pdf获取 Post /grade/getPdf */
export async function getPdf(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/grade/getPdf', {
    method: 'POST',

    //返回体全部获取
    getResponse: true,
    //相应格式设置为blob
    responseType: 'blob',

    ...(options || {}),
  });
}

/** 此处后端没有提供注释 Post /course/getCourse */
export async function getCourse(body: API.SearchCourseParams, options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/course/getCourse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// ------------------------------------------------------

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
