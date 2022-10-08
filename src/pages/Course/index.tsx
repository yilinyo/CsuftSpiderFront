/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-28 20:51:19
 * @LastEditTime: 2022-10-08 20:01:23
 * @FilePath: \CsuftSpiderFront\src\pages\Course\index.tsx
 */
import { getCourse } from '@/services/ant-design-pro/api';
import { API } from '@/services/ant-design-pro/typings';
import { ProCard } from '@ant-design/pro-components';
import { Card, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const { Option, OptGroup } = Select;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const str = year + '/' + month + '/' + day;

function getDiffDay(date_1, date_2) {
  // 计算两个日期之间的差值
  let totalDays, diffDate;
  let myDate_1 = Date.parse(date_1);
  let myDate_2 = Date.parse(date_2);
  // 将两个日期都转换为毫秒格式，然后做差
  diffDate = Math.abs(myDate_1 - myDate_2); // 取相差毫秒数的绝对值

  totalDays = Math.floor(diffDate / (1000 * 3600 * 24)); // 向下取整
  // console.log(totalDays)

  return totalDays; // 相差的天数
}
const diff = getDiffDay('2022/10/3', str);
//当前第几周
const weekNow = 6 + Math.floor(diff / 7);

const week: string = weekNow;

class Demo extends React.Component {
  // 初始化类组件的 state

  constructor(props) {
    super(props);

    this.state = {
      week: 1,
      extra: '',

      timetables: [
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', ''],
      ],
    };
  }

  timetable: any;

  //处理选择框改变选择
  handleChange = async (value: any) => {
    //删除dom 并重新渲染
    var coursetab = document.getElementById('coursesTable');
    var tab = document.getElementById('courseWrapper');

    coursetab?.removeChild(tab);

    const searchParams: API.SearchCourseParams = { week: value };
    const response = await getCourse(searchParams);

    this.setState({ timetables: response.arr });

    setTimeout(() => {
      this.timetable = new Timetables({
        el: '#coursesTable',
        timetables: this.state.timetables,
        week: this.week,
        timetableType: this.timetableType,
        highlightWeek: this.highlightWeek,
        gridOnClick: function (e) {
          alert(e.name + '  ' + e.week + ', 第' + e.index + '节课, 课长' + e.length + '节');
          console.log(e);
        },
        styles: this.styles,
      });
    }, 0);
  };

  // 编写生命周期方法 didMount
  async componentDidMount() {
    const searchParams: API.SearchCourseParams = { week: week };

    const response = await getCourse(searchParams);

    this.setState({ timetables: response.arr });
    this.setState({ extra: response.extra });

    setTimeout(() => {
      this.timetable = new Timetables({
        el: '#coursesTable',
        timetables: this.state.timetables,
        week: this.week,
        timetableType: this.timetableType,
        highlightWeek: this.highlightWeek,
        gridOnClick: function (e) {
          alert(e.name + '  ' + e.week + ', 第' + e.index + '节课, 课长' + e.length + '节');
          console.log(e);
        },
        styles: this.styles,
      });
    }, 0);

    // 省略业务逻辑
  }

  timetableType = [
    [{ index: '1', name: '8:00' }, 1],
    [{ index: '2', name: '8:55 ' }, 1],
    [{ index: '3', name: '9:55' }, 1],
    [{ index: '4', name: '10:50' }, 1],
    [{ index: '5', name: '14:00' }, 1],
    [{ index: '6', name: '14:55' }, 1],
    [{ index: '7', name: '15:55' }, 1],
    [{ index: '8', name: '16:50' }, 1],
    [{ index: '9', name: '19:00' }, 1],
    [{ index: '10', name: '19:55' }, 1],
    [{ index: '11', name: '20:55' }, 1],
    [{ index: '12', name: '22:00' }, 1],
  ];
  week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  highlightWeek = new Date().getDay();
  styles = {
    Gheight: 85,
    leftHandWidth: 50,
    palette: ['#ff6633'],
  };

  render() {
    //编写生命周期方法 render

    return (
      <>
        <ProCard className="demoClass" id="coursesTable">
          <Select
            size="middle"
            onChange={this.handleChange}
            defaultValue={week + ''}
            style={{ width: 100, left: 'calc(50% - 50px)' }}
          >
            <Option value="1">第一周</Option>
            <Option value="2">第二周</Option>
            <Option value="3">第三周</Option>
            <Option value="4">第四周</Option>
            <Option value="5">第五周</Option>
            <Option value="6">第六周</Option>
            <Option value="7">第七周</Option>
            <Option value="8">第八周</Option>
            <Option value="9">第九周</Option>
            <Option value="10">第十周</Option>
            <Option value="11">第十一周</Option>
            <Option value="12">第十二周</Option>
            <Option value="13">第十三周</Option>
            <Option value="14">第十四周</Option>
            <Option value="15">第十五周</Option>
            <Option value="16">第十六周</Option>
            <Option value="17">第十七周</Option>
            <Option value="18">第十八周</Option>
          </Select>
        </ProCard>
        <Card>{this.state.extra}</Card>
      </>
    );
  }
}
export default Demo;
