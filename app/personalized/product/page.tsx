'use client';

import { Card, Tabs } from 'antd';
import styled from 'styled-components';
import { ProductTable } from '@/components/personalized/ProductTable';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const items = [
  {
    key: 'paper-box',
    label: '纸盒盒型',
    children: <ProductTable type="paper-box" />,
  },
  {
    key: 'hardcover',
    label: '精装盒盒型',
    children: <ProductTable type="hardcover" />,
  },
  {
    key: 'book',
    label: '书刊画册',
    children: <ProductTable type="book" />,
  },
];

export default function ProductPage() {
  return (
    <StyledCard title="产品配置">
      <Tabs items={items} />
    </StyledCard>
  );
} 