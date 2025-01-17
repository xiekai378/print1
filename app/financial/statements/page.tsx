'use client';

import { Card, Table, DatePicker, Select, Button } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const { RangePicker } = DatePicker;

const columns = [
  {
    title: '对账日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: '订单数量',
    dataIndex: 'orderCount',
    key: 'orderCount',
  },
  {
    title: '订单总额',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '已收款',
    dataIndex: 'receivedAmount',
    key: 'receivedAmount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '未收款',
    dataIndex: 'unpaidAmount',
    key: 'unpaidAmount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>查看</a>
        <a style={{ marginRight: 16 }}>导出</a>
        <a>确认</a>
      </span>
    ),
  },
];

const mockData = [
  {
    key: '1',
    date: '2024-02-16',
    customerName: '示例客户1',
    orderCount: 5,
    totalAmount: 10000,
    receivedAmount: 8000,
    unpaidAmount: 2000,
  },
];

export default function StatementsPage() {
  return (
    <StyledCard title="对账单">
      <div style={{ marginBottom: 16 }}>
        <RangePicker style={{ marginRight: 16 }} />
        <Select
          placeholder="选择客户"
          style={{ width: 200, marginRight: 16 }}
          options={[
            { value: '1', label: '示例客户1' },
            { value: '2', label: '示例客户2' },
          ]}
        />
        <Button type="primary">生成对账单</Button>
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