'use client';

import { Card, Form, DatePicker, Button, Table } from 'antd';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const { RangePicker } = DatePicker;

interface FormValues {
  dateRange: [Dayjs, Dayjs];
}

const columns = [
  {
    title: '加工项目',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => `¥${price.toFixed(2)}`,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a>删除</a>
      </span>
    ),
  },
];

const mockData = [
  {
    key: '1',
    name: '烫金加工',
    quantity: 1000,
    price: 0.5,
    amount: 500,
  },
  {
    key: '2',
    name: '模切加工',
    quantity: 2000,
    price: 0.3,
    amount: 600,
  },
];

export default function ProcessingFeePage() {
  const [form] = Form.useForm<FormValues>();

  const handleSubmit = (values: FormValues) => {
    console.log('Form values:', values);
  };

  return (
    <StyledCard title="加工费结算">
      <Form
        form={form}
        layout="inline"
        onFinish={handleSubmit}
        style={{ marginBottom: 24 }}
      >
        <Form.Item
          label="结算日期"
          name="dateRange"
        >
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            新增加工费
          </Button>
        </Form.Item>
      </Form>
      <Table 
        columns={columns} 
        dataSource={mockData}
        summary={pageData => {
          const total = pageData.reduce((acc, curr) => acc + curr.amount, 0);
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3}>总计</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                ¥{total.toFixed(2)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} />
            </Table.Summary.Row>
          );
        }}
      />
    </StyledCard>
  );
} 