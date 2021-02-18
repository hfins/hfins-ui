/**
 * QueryBarMoreUse - 查询表头
 * @Author: BuzzLightyear<yongtao.di@hand-china.com>
 * @Date: 2020/04/07 19：56
 * @LastEditTime:  2020/04/07 19：56
 * @param queryDataSet => dataset.queryDataSet
 * @param queryFieldsConfig  => queryFields list
 * @param buttons => ?Buttons[]
 * @param dataSet => DataSet
 * @param queryFieldsLimit => ?number
 * @Copyright: Copyright (c) 2020, Hand
 */

import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
} from 'react';
import { Button, Form } from 'choerodon-ui/pro';
import { Buttons } from 'choerodon-ui/pro/lib/table/Table';
import DataSet from 'choerodon-ui/pro/lib/data-set';

import isObject from 'lodash/isObject';

import { getEditorByField } from 'choerodon-ui/pro/lib/table/utils';

import 'choerodon-ui/pro/lib/output/style';
import 'choerodon-ui/pro/lib/button/style';
import 'choerodon-ui/pro/lib/radio/style';
import 'choerodon-ui/pro/lib/check-box/style';
import 'choerodon-ui/pro/lib/text-field/style';
import 'choerodon-ui/pro/lib/number-field/style';
import 'choerodon-ui/pro/lib/lov/style';
import 'choerodon-ui/pro/lib/select/style';
import 'choerodon-ui/pro/lib/date-picker/style';
import 'choerodon-ui/pro/lib/spin/style';
import 'choerodon-ui/pro/lib/pagination/style';
import 'choerodon-ui/pro/lib/modal-container/style';
import 'choerodon-ui/pro/lib/tooltip/style';
import 'choerodon-ui/pro/lib/validator/style';
import 'choerodon-ui/pro/lib/switch/style';
import 'choerodon-ui/pro/lib/menu/style';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';
import { FieldProps } from 'choerodon-ui/pro/lib/data-set/Field';

const getQueryFields = (queryFields, dataSet): ReactElement<any>[] => {
  const { queryDataSet } = dataSet;
  const result = [];
  if (queryDataSet) {
    const { fields } = queryDataSet;
    return [...fields.entries()].reduce((list, [name, field]) => {
      if (!field.get('bind')) {
        const props = {
          key: name,
          name,
          dataSet: queryDataSet,
        };
        const element = queryFields[name];
        list.push(
          isValidElement(element)
            ? cloneElement(element, props)
            : cloneElement(getEditorByField(field), {
                ...props,
                ...(isObject(element) ? element : {}),
              }),
        );
      }
      return list;
    }, result);
  }
  return result;
};

interface QueryBarMoreProps {
  queryFieldsConfig?: FieldProps[] | undefined;
  buttons?: Buttons[];
  queryFieldsLimit?: number;
  dataSet: DataSet;
  queryDataSet?: DataSet;
}

const QueryBarMore: React.FC<QueryBarMoreProps> = (
  props: QueryBarMoreProps,
) => {
  const {
    queryFieldsConfig = {},
    buttons,
    queryFieldsLimit = 3,
    dataSet,
  } = props;
  const { queryDataSet = dataSet.queryDataSet } = props;
  const queryFields = getQueryFields(
    {
      queryDataSet: dataSet.queryDataSet,
      queryFieldsConfig: dataSet.queryDataSet?.props.queryFields,
      dataSet,
      ...queryFieldsConfig,
    },
    dataSet,
  );
  const [hidden, setHidden] = useState(true);
  const handleToggle = () => {
    setHidden(!hidden);
  };
  const query = async () => {
    if (await dataSet.validate(false, false)) {
      await dataSet.query();
    }
  };
  return (
    <div className="c7n-pro-table-wrapper">
      <div>
        {queryDataSet ? (
          <div
            style={{
              display: 'flex',
              marginBottom: '10px',
              alignItems: 'flex-start',
            }}
          >
            <Form
              style={{ flex: 'auto' }}
              columns={queryFieldsLimit}
              dataSet={queryDataSet}
              onKeyDown={e => {
                if (e.keyCode === 13) return query();
              }}
            >
              {hidden ? queryFields.slice(0, queryFieldsLimit) : queryFields}
            </Form>
            <div
              style={{
                marginTop: '11px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                marginLeft: '11px',
              }}
            >
              {queryFields.length > queryFieldsLimit && (
                <Button onClick={handleToggle}>
                  {hidden ? '更多查询' : '收起查询'}
                </Button>
              )}
              <Button
                onClick={() => {
                  // @ts-ignore
                  queryDataSet.current.reset();
                  dataSet.fireEvent('queryBarReset', {
                    dataSet,
                    queryFields,
                  });
                }}
              >
                {'重置'}
              </Button>
              <Button color={'primary' as ButtonColor} onClick={query}>
                {'查询'}
              </Button>
            </div>
          </div>
        ) : null}
        {buttons && buttons.length ? <div>{buttons}</div> : null}
      </div>
    </div>
  );
};

export default QueryBarMore;
