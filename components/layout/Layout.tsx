'use client';

import React, { useMemo } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  DatabaseOutlined,
  DollarOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const { Header, Sider, Content } = AntLayout;

// 使用styled-components的缓存功能
const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`;

const Logo = styled.div`
  color: #1890ff;
  font-size: 18px;
  font-weight: bold;
`;

const StyledContent = styled(Content)`
  margin: 24px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  min-height: 280px;
`;

// 使用 React.memo 优化菜单项渲染
const MenuComponent = React.memo(({ items, pathname, onMenuClick }: {
  items: any[];
  pathname: string;
  onMenuClick: (key: string) => void;
}) => (
  <Menu
    mode="inline"
    selectedKeys={[pathname]}
    style={{ height: '100%', borderRight: 0 }}
    items={items}
    onClick={({ key }) => onMenuClick(key)}
  />
));

MenuComponent.displayName = 'MenuComponent';

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // 使用 useMemo 缓存菜单项配置
  const menuItems = useMemo(() => [
    {
      key: '/home',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/personalized',
      icon: <SettingOutlined />,
      label: '个性化配置',
      children: [
        {
          key: '/personalized/formula',
          label: '报价公式配置',
        },
        {
          key: '/personalized/loss',
          label: '损耗调整',
        },
        {
          key: '/personalized/product',
          label: '产品配置',
        },
        {
          key: '/personalized/template',
          label: '报价模板管理',
        },
      ],
    },
    {
      key: '/order-customer',
      icon: <UserOutlined />,
      label: '订单与客户',
      children: [
        {
          key: '/order-customer/orders',
          label: '订单列表',
        },
        {
          key: '/order-customer/customers',
          label: '客户列表',
        },
      ],
    },
    {
      key: '/data',
      icon: <DatabaseOutlined />,
      label: '数据管理',
      children: [
        {
          key: '/data/products',
          label: '产品类型管理',
        },
        {
          key: '/data/materials',
          label: '材料管理',
        },
        {
          key: '/data/crafts',
          label: '工艺管理',
        },
        {
          key: '/data/machines',
          label: '机器管理',
        },
      ],
    },
    {
      key: '/financial',
      icon: <DollarOutlined />,
      label: '财务管理',
      children: [
        {
          key: '/financial/processing-fee',
          label: '加工费结算',
        },
        {
          key: '/financial/processing-list',
          label: '加工费列表',
        },
        {
          key: '/financial/statements',
          label: '对账单',
        },
        {
          key: '/financial/customer-settlement',
          label: '客户结算',
        },
        {
          key: '/financial/settlement-list',
          label: '客户结算列表',
        },
        {
          key: '/financial/payment',
          label: '客户付款单',
        },
      ],
    },
    {
      key: '/user',
      icon: <UserSwitchOutlined />,
      label: '用户中心',
      children: [
        {
          key: '/user/settings',
          label: '个人设置',
        },
        {
          key: '/user/rewards',
          label: '用户激励',
        },
      ],
    },
  ], []); // 空依赖数组，因为菜单配置是静态的

  // 使用 useMemo 缓存路由跳转函数
  const handleMenuClick = useMemo(() => (key: string) => {
    router.push(key);
  }, [router]);

  return (
    <StyledLayout>
      <Sider width={250} theme="light">
        <StyledHeader>
          <Logo>印刷报价系统</Logo>
        </StyledHeader>
        <MenuComponent
          items={menuItems}
          pathname={pathname}
          onMenuClick={handleMenuClick}
        />
      </Sider>
      <AntLayout>
        <StyledContent>{children}</StyledContent>
      </AntLayout>
    </StyledLayout>
  );
} 