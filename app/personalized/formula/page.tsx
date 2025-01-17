'use client';

import { Card, Table } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '公式名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '适用产品类型',
    dataIndex: 'productType',
    key: 'productType',
  },
  {
    title: '公式内容',
    dataIndex: 'formula',
    key: 'formula',
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
    name: '标准纸盒报价公式',
    productType: '纸盒',
    formula: '(材料费 + 印刷费 + 工艺费) * (1 + 损耗率)',
  },
];

export default function FormulaPage() {
  return (
    <StyledCard title="报价公式配置">
      <Table columns={columns} dataSource={mockData} />
    </StyledCard>
  );
} 