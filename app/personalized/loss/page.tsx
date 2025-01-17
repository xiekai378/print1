'use client';

import { Card, Table, Button } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '材料/工艺',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '损耗比例',
    dataIndex: 'lossRate',
    key: 'lossRate',
    render: (rate: number) => `${(rate * 100).toFixed(2)}%`,
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
    name: '铜版纸',
    type: '材料',
    lossRate: 0.05,
  },
  {
    key: '2',
    name: '烫金',
    type: '工艺',
    lossRate: 0.08,
  },
];

export default function LossPage() {
  return (
    <StyledCard 
      title="损耗调整"
      extra={<Button type="primary">新增损耗配置</Button>}
    >
      <Table columns={columns} dataSource={mockData} />
    </StyledCard>
  );
} 