'use client';

import { Card, Table, DatePicker, Select } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const { RangePicker } = DatePicker;

const columns = [
  {
    title: '结算日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: '结算金额',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '结算方式',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: '经办人',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>查看</a>
        <a>导出</a>
      </span>
    ),
  },
];

const mockData = [
  {
    key: '1',
    date: '2024-02-16',
    customerName: '示例客户1',
    amount: 10000,
    method: '银行转账',
    operator: '张三',
    status: '已完成',
  },
];

export default function SettlementListPage() {
  return (
    <StyledCard title="客户结算列表">
      <div style={{ marginBottom: 16 }}>
        <RangePicker style={{ marginRight: 16 }} />
        <Select
          placeholder="选择客户"
          style={{ width: 200 }}
          options={[
            { value: '1', label: '示例客户1' },
            { value: '2', label: '示例客户2' },
          ]}
        />
      </div>
      <Table 
        columns={columns} 
        dataSource={mockData}
        pagination={{
          total: 100,
          pageSize: 10,
          showTotal: (total) => `共 ${total} 条`,
        }}
      />
    </StyledCard>
  );
} 