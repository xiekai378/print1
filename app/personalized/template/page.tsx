'use client';

import { Card, Table, Button } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '模板名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '适用产品类型',
    dataIndex: 'productType',
    key: 'productType',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a style={{ marginRight: 16 }}>套用</a>
        <a>删除</a>
      </span>
    ),
  },
];

const mockData = [
  {
    key: '1',
    name: '标准纸盒报价模板',
    productType: '纸盒',
    createTime: '2024-02-16 10:00:00',
  },
  {
    key: '2',
    name: '精装书报价模板',
    productType: '书刊画册',
    createTime: '2024-02-16 11:00:00',
  },
];

export default function TemplatePage() {
  return (
    <StyledCard 
      title="报价模板管理"
      extra={<Button type="primary">新增模板</Button>}
    >
      <Table columns={columns} dataSource={mockData} />
    </StyledCard>
  );
} 