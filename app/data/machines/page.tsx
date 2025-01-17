'use client';

import { Card, Table, Button } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '机器名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '产能',
    dataIndex: 'capacity',
    key: 'capacity',
    render: (capacity: number, record: { unit: string }) => `${capacity}${record.unit}/小时`,
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
    name: '海德堡印刷机',
    type: '印刷设备',
    capacity: 8000,
    unit: '张',
  },
  {
    key: '2',
    name: '全自动模切机',
    type: '后道设备',
    capacity: 5000,
    unit: '张',
  },
];

export default function MachinesPage() {
  return (
    <StyledCard 
      title="机器管理"
      extra={<Button type="primary">新增机器</Button>}
    >
      <Table columns={columns} dataSource={mockData} />
    </StyledCard>
  );
} 