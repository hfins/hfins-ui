/**
 * ModaLov - 模拟Lov 打开一个Modal
 * @Author: BuzzLightyear.Z <yongtao.di@hand-china.com>
 * @Date: 2020-05-09 16:21:56
 * @LastEditTime: 2020-05-09 16:21:56
 * @Copyright: Copyright (c) 2020, Hand
 */

import React from 'react';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import Record from 'choerodon-ui/pro/lib/data-set/Record';
import { TextField } from 'choerodon-ui/pro';
import { Icon } from 'choerodon-ui';

/**
 * name 字段名
 * sourceDataSet 来源ds
 * sourceRecord 来源record
 * clearButton  清除信息按钮
 * handleModalLovClick 打开Modal方法
 */

interface ModalLovInfoProps {
  name?: string;
  sourceDataSet?: DataSet;
  sourceRecord?: Record;
  clearButton?: boolean;
  handleModalLovClick?: any;
  readOnly?: boolean;
}

class ModalLov extends React.Component<ModalLovInfoProps> {
  textFieldRef: InstanceType<typeof TextField> | null = null;

  focus = () => {
    if (!this.textFieldRef) {
      return;
    }

    this.textFieldRef.focus();
  };

  saveRef = ref => {
    this.textFieldRef = ref;
  };

  render() {
    return (
      <TextField
        name={this.props.name}
        dataSet={this.props.sourceDataSet}
        record={this.props.sourceRecord}
        clearButton={this.props.clearButton}
        ref={this.saveRef}
        onFocus={this.focus}
        maxLength={0}
        {...this.props}
        suffix={
          <Icon
            style={{ color: 'rgba(0, 0, 0, 0.25)' }}
            type="search"
            onClick={async () => {
              if (!this.props.readOnly) {
                await this.props.handleModalLovClick();
              }
            }}
          />
        }
      />
    );
  }
}

export default ModalLov;
