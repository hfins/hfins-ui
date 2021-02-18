import React, { Component } from 'react';
import { DataSet, Table } from 'choerodon-ui/pro';
import QueryBarMore from '../../index';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import { ColumnProps } from 'choerodon-ui/pro/lib/table/Column';
import { TableQueryBarType } from 'choerodon-ui/pro/lib/table/enum';

class QueryBarMoreUse extends Component {
  ds: DataSet;

  constructor(props) {
    super(props);
    this.ds = new DataSet({
      fields: [
        {
          name: 'name',
          type: 'string' as FieldType,
          label: '姓名',
        },
        {
          name: 'age',
          type: 'number' as FieldType,
          label: '年龄',
        },
        {
          name: 'sex',
          type: 'string' as FieldType,
          label: '性别',
        },
        {
          name: 'hobby',
          type: 'string' as FieldType,
          label: '爱好',
        },
      ],
      queryFields: [
        {
          name: 'name',
          type: 'string' as FieldType,
          label: '姓名',
        },
        {
          name: 'age',
          type: 'number' as FieldType,
          label: '年龄',
        },
      ],
      data: [
        { name: '张三', age: 18, sex: 'male', hobby: 'basketball' },
        { name: '李四', age: 19, sex: 'famale', hobby: 'football' },
        { name: '王五', age: 20, sex: 'male', hobby: 'basketball' },
        { name: '孙六', age: 21, sex: 'famale', hobby: 'basketball' },
      ],
    });
  }

  get columns(): ColumnProps[] {
    return [
      {
        name: 'name',
      },
      {
        name: 'age',
      },
      {
        name: 'sex',
      },
      {
        name: 'hobby',
      },
    ];
  }

  render() {
    return (
      <>
        <QueryBarMore dataSet={this.ds} />
        <Table
          dataSet={this.ds}
          columns={this.columns}
          queryBar={'none' as TableQueryBarType}
        />
      </>
    );
  }
}

export default () => <QueryBarMoreUse />;
