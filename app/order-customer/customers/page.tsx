'use client';

import { useEffect, useState } from 'react';
import { Card, Table, Button } from 'antd';
import styled from 'styled-components';
import { mockApi } from '@/lib/mockData';
import { logger } from '@/lib/logger';
import { Customer } from '@/types';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '客户名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '联系人',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a style={{ marginRight: 16 }}>查看订单</a>
        <a>删除</a>
      </span>
    ),
  },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const data = await mockApi.getCustomers();
        setCustomers(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err : String(err);
        logger.error(errorMessage, 'CustomersPage.fetchCustomers');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <StyledCard 
      title="客户列表"
      extra={<Button type="primary">新增客户</Button>}
    >
      <Table 
        columns={columns} 
        dataSource={customers}
        loading={loading}
        rowKey="id"
      />
    </StyledCard>
  );
} 