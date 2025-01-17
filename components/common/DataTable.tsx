'use client';

import React from 'react';
import { Table, TableProps } from 'antd';
import styled from 'styled-components';

const TableWrapper = styled.div`
  .ant-table-wrapper {
    width: 100%;
  }
`;

interface DataTableProps<T> extends Omit<TableProps<T>, 'pagination'> {
  total?: number;
  pageSize?: number;
  loading?: boolean;
  showTotal?: boolean;
}

function DataTable<T extends object>({
  columns,
  dataSource,
  total = 0,
  pageSize = 10,
  loading = false,
  showTotal = true,
  ...rest
}: DataTableProps<T>) {
  const pagination = {
    total,
    pageSize,
    showTotal: showTotal ? (total: number) => `共 ${total} 条` : undefined,
  };

  return (
    <TableWrapper>
      <Table<T>
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        loading={loading}
        {...rest}
      />
    </TableWrapper>
  );
}

// 使用 memo 优化表格组件
export default React.memo(DataTable) as typeof DataTable; 