'use client';

import { Card, DatePicker } from 'antd';
import styled from 'styled-components';
import { useCallback, useMemo } from 'react';
import type { Dayjs } from 'dayjs';
import type { RangePickerProps } from 'antd/es/date-picker';
import DataTable from '@/components/common/DataTable';
import { useTableData } from '@/hooks/useTableData';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const { RangePicker } = DatePicker;

// 使用 memo 缓存列定义
const useColumns = () => {
  return useMemo(() => [
    {
      title: '结算日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '加工项目',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `¥${price.toFixed(2)}`,
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `¥${amount.toFixed(2)}`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <span>
          <a style={{ marginRight: 16 }}>查看</a>
          <a>导出</a>
        </span>
      ),
    },
  ], []);
};

// 模拟数据加载函数
const fetchProcessingList = async (params: any) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    data: [{
      key: '1',
      date: '2024-02-16',
      name: '烫金加工',
      quantity: 1000,
      price: 0.5,
      amount: 500,
      status: '已结算',
    }],
    total: 100,
  };
};

export default function ProcessingListPage() {
  const columns = useColumns();
  
  const { data, loading, total, onPageChange } = useTableData({
    fetchData: fetchProcessingList,
  });

  const handleDateChange: RangePickerProps['onChange'] = useCallback((dates, dateStrings) => {
    if (dates) {
      // 在实际项目中这里会触发数据重新加载
      console.log('日期范围:', dateStrings);
    }
  }, []);

  return (
    <StyledCard title="加工费列表">
      <div style={{ marginBottom: 16 }}>
        <RangePicker 
          style={{ marginRight: 16 }} 
          onChange={handleDateChange}
        />
      </div>
      <DataTable 
        columns={columns}
        dataSource={data}
        loading={loading}
        total={total}
        onChange={(pagination) => {
          onPageChange(pagination.current || 1, pagination.pageSize);
        }}
      />
    </StyledCard>
  );
} 