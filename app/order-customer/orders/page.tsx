'use client';

import { useEffect } from 'react';
import { Card, Table, Tag, Alert } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setOrders, setLoading, setError } from '@/store/features/orderSlice';
import { mockApi } from '@/lib/mockData';
import { logger } from '@/lib/logger';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const columns = [
  {
    title: '订单编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: '产品类型',
    dataIndex: 'productType',
    key: 'productType',
  },
  {
    title: '订单金额',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    render: (amount: number) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const color = {
        pending: 'gold',
        processing: 'blue',
        completed: 'green',
        cancelled: 'red',
      }[status];
      const text = {
        pending: '待处理',
        processing: '处理中',
        completed: '已完成',
        cancelled: '已取消',
      }[status];
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>查看</a>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a>删除</a>
      </span>
    ),
  },
];

export default function OrdersPage() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch(setLoading(true));
        const data = await mockApi.getOrders();
        dispatch(setOrders(data));
      } catch (err) {
        const errorMessage = err instanceof Error ? err : String(err);
        logger.error(errorMessage, 'OrdersPage.fetchOrders');
        dispatch(setError('获取订单列表失败'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchOrders();
  }, [dispatch]);

  return (
    <StyledCard title="订单列表">
      {error && <Alert message={error} type="error" style={{ marginBottom: 16 }} />}
      <Table
        columns={columns}
        dataSource={orders}
        loading={loading}
        rowKey="id"
      />
    </StyledCard>
  );
} 