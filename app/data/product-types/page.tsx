'use client';

import { useEffect, useState } from 'react';
import { Card, Table, Button } from 'antd';
import styled from 'styled-components';
import { mockApi } from '@/lib/mockData';
import { logger } from '@/lib/logger';
import { ProductType, Parameter } from '@/types';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '产品类型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '参数数量',
    dataIndex: 'parameters',
    key: 'parameters',
    render: (parameters: Parameter[]) => parameters.length,
  },
  {
    title: '报价公式',
    dataIndex: 'formula',
    key: 'formula',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a style={{ marginRight: 16 }}>参数配置</a>
        <a>删除</a>
      </span>
    ),
  },
];

export default function ProductTypesPage() {
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductTypes = async () => {
      try {
        setLoading(true);
        const data = await mockApi.getProductTypes();
        setProductTypes(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err : String(err);
        logger.error(errorMessage, 'ProductTypesPage.fetchProductTypes');
      } finally {
        setLoading(false);
      }
    };

    fetchProductTypes();
  }, []);

  return (
    <StyledCard 
      title="产品类型管理"
      extra={<Button type="primary">新增产品类型</Button>}
    >
      <Table 
        columns={columns} 
        dataSource={productTypes}
        loading={loading}
        rowKey="id"
      />
    </StyledCard>
  );
} 