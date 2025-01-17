'use client';

import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { logger } from '@/lib/logger';

const { Header, Sider, Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const menuItems = [
  {
    key: 'home',
    label: '首页',
  },
  {
    key: 'personalized',
    label: '个性化配置',
    children: [
      { key: 'formula', label: '报价公式配置' },
      { key: 'loss', label: '损耗调整' },
      { key: 'product', label: '产品配置' },
      { key: 'template', label: '报价模板管理' },
    ],
  },
  {
    key: 'order-customer',
    label: '订单与客户管理',
    children: [
      { key: 'orders', label: '订单列表' },
      { key: 'customers', label: '客户列表' },
    ],
  },
  {
    key: 'data',
    label: '数据管理',
    children: [
      { key: 'product-types', label: '产品类型管理' },
      { key: 'materials', label: '材料管理' },
      { key: 'crafts', label: '工艺管理' },
      { key: 'machines', label: '机器管理' },
    ],
  },
  {
    key: 'financial',
    label: '财务管理',
    children: [
      { key: 'processing-fee', label: '加工费结算' },
      { key: 'processing-list', label: '加工费列表' },
      { key: 'statements', label: '对账单' },
      { key: 'customer-settlement', label: '客户结算' },
      { key: 'settlement-list', label: '客户结算列表' },
      { key: 'payment', label: '客户付款单' },
    ],
  },
  {
    key: 'user',
    label: '用户中心',
    children: [
      { key: 'settings', label: '个人设置' },
      { key: 'rewards', label: '用户激励' },
    ],
  },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const handleMenuClick = ({ key }: { key: string }) => {
    try {
      router.push(`/${key}`);
    } catch (error) {
      logger.error(error instanceof Error ? error : String(error), 'Layout.handleMenuClick');
    }
  };

  return (
    <StyledLayout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ padding: '0 24px' }}>印刷报价系统</div>
      </Header>
      <StyledLayout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
        <Content style={{ padding: 24, minHeight: 280 }}>{children}</Content>
      </StyledLayout>
    </StyledLayout>
  );
}; 