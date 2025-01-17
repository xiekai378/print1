'use client';

import { useEffect, useState } from 'react';
import { Card, Table, Button, Tabs } from 'antd';
import styled from 'styled-components';
import { mockApi } from '@/lib/mockData';
import { logger } from '@/lib/logger';
import { Craft } from '@/types';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '工艺名称',
    dataIndex: 'name',
    key: 'name',
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

const craftTypes = [
  { key: '印刷费', label: '印刷费' },
  { key: '表面工艺', label: '表面工艺' },
  { key: '丝印', label: '丝印' },
  { key: '瓦楞对裱工艺', label: '瓦楞对裱工艺' },
  { key: '模切', label: '模切' },
  { key: '烫金工艺', label: '烫金工艺' },
  { key: '凹凸工艺', label: '凹凸工艺' },
  { key: '加工费', label: '加工费' },
];

export default function CraftsPage() {
  const [crafts, setCrafts] = useState<Craft[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeType, setActiveType] = useState('印刷费');

  useEffect(() => {
    const fetchCrafts = async () => {
      try {
        setLoading(true);
        const data = await mockApi.getCrafts();
        setCrafts(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err : String(err);
        logger.error(errorMessage, 'CraftsPage.fetchCrafts');
      } finally {
        setLoading(false);
      }
    };

    fetchCrafts();
  }, []);

  const filteredCrafts = crafts.filter(craft => craft.type === activeType);

  const items = craftTypes.map(type => ({
    key: type.key,
    label: type.label,
    children: (
      <>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary">新增{type.label}</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={filteredCrafts}
          loading={loading}
          rowKey="id"
        />
      </>
    ),
  }));

  return (
    <StyledCard title="工艺管理">
      <Tabs 
        items={items}
        activeKey={activeType}
        onChange={key => setActiveType(key)}
      />
    </StyledCard>
  );
} 