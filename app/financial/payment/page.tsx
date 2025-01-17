'use client';

import { Card, Form, Select, Input, Button, DatePicker, Table } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '付款日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: '付款金额',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '付款方式',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: '付款账号',
    dataIndex: 'account',
    key: 'account',
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
        <a>打印</a>
      </span>
    ),
  },
];

const mockData = [
  {
    key: '1',
    date: '2024-02-16',
    customerName: '示例客户1',
    amount: 5000,
    method: '银行转账',
    account: '6222************1234',
    status: '已付款',
  },
];

export default function PaymentPage() {
  const [form] = Form.useForm();

  return (
    <StyledCard title="客户付款单">
      <Form
        form={form}
        layout="inline"
        style={{ marginBottom: 24 }}
      >
        <Form.Item
          name="customer"
          label="客户"
        >
          <Select
            placeholder="选择客户"
            style={{ width: 200 }}
            options={[
              { value: '1', label: '示例客户1' },
              { value: '2', label: '示例客户2' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="amount"
          label="付款金额"
        >
          <Input prefix="¥" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          name="date"
          label="付款日期"
        >
          <DatePicker style={{ width: 200 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">创建付款单</Button>
        </Form.Item>
      </Form>
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