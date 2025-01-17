'use client';

import { useEffect, useState } from 'react';
import { Card, Table, Button, Tabs } from 'antd';
import styled from 'styled-components';
import { mockApi } from '@/lib/mockData';
import { logger } from '@/lib/logger';
import { Material } from '@/types';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '材料名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '规格',
    dataIndex: 'specifications',
    key: 'specifications',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => `¥${price.toFixed(2)}/${price}`,
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
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

const materialTypes = [
  { key: '普通纸类', label: '普通纸类' },
  { key: '特种纸', label: '特种纸' },
  { key: '灰板纸', label: '灰板纸/密度板' },
  { key: '不干胶', label: '不干胶' },
  { key: '特殊材料', label: '特殊材料' },
  { key: '配件', label: '配件' },
  { key: '纸箱材料', label: '纸箱材料' },
];

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeType, setActiveType] = useState('普通纸类');

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setLoading(true);
        const data = await mockApi.getMaterials();
        setMaterials(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err : String(err);
        logger.error(errorMessage, 'MaterialsPage.fetchMaterials');
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const filteredMaterials = materials.filter(material => material.type === activeType);

  const items = materialTypes.map(type => ({
    key: type.key,
    label: type.label,
    children: (
      <>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary">新增{type.label}</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={filteredMaterials}
          loading={loading}
          rowKey="id"
        />
      </>
    ),
  }));

  return (
    <StyledCard title="材料管理">
      <Tabs 
        items={items}
        activeKey={activeType}
        onChange={key => setActiveType(key)}
      />
    </StyledCard>
  );
} 