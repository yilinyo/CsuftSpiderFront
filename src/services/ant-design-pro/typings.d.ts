// @ts-ignore
/* eslint-disable */

import { NumericDictionary } from 'lodash';

declare namespace API {
  /**
   * 通用返回
   */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  };

  /**
   * 当前用户
   */
  type CurrentUser = {
    name?: string;
    sid?: string;
  };

  /**
   * 成绩实体
   *
   */
  type GradeListItem = {
    id?: number;
    term?: string;
    courseName?: string;
    exameName?: string;
    date?: string;
    grade?: string;
    credit?: number;
    gradePoint?: number;
    attribute?: string;
    status?: number;
  };
  type LevelGradeListItem = {
    id?: number;
    date?: string;
    examName?: string;
    grade?: number;
  };

  /**
   * 登陆结果
   */

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  /**
   *
   * 登陆参数
   */

  type LoginParams = {
    sid?: string;
    pwd?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type RegisterResult = {
    // status?: string;
    // type?: string;
    // currentAuthority?: string;
    id?: number;
  };

  /**
   * 成绩搜索参数
   */
  type SearchGradeParams = {
    year?: string;
    term?: string;
    type?: string;
  };
  /**
   * 考试搜索参数
   */
  type SearchExamParams = {
    term?: string;
    type?: string;
  };

  /**
   * 课程搜索参数
   */
  type SearchCourseParams = {
    week?: string;

    type?: string;
  };

  // ----------------------------------
  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
