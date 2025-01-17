'use client';

import { Card, Form, Select, Input, Button, Table } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '订单编号',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: '产品名称',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: '订单金额',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '订单日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
];

const mockData = [
  {
    key: '1',
    orderId: 'ORD20240216001',
    productName: '纸盒',
    amount: 1500,
    date: '2024-02-16',
    status: '待结算',
  },
];

export default function CustomerSettlementPage() {
  const [form] = Form.useForm();

  return (
    <StyledCard title="客户结算">
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
          label="结算金额"
        >
          <Input prefix="¥" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">确认结算</Button>
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