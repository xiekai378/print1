'use client';

import { useState, useCallback } from 'react';

interface TableParams {
  page?: number;
  pageSize?: number;
  [key: string]: any;
}

interface UseTableDataOptions<T> {
  fetchData: (params: TableParams) => Promise<{
    data: T[];
    total: number;
  }>;
  defaultParams?: TableParams;
}

export function useTableData<T>({ fetchData, defaultParams = {} }: UseTableDataOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState<TableParams>({
    page: 1,
    pageSize: 10,
    ...defaultParams,
  });

  const loadData = useCallback(async (newParams?: TableParams) => {
    try {
      setLoading(true);
      const currentParams = { ...params, ...newParams };
      const result = await fetchData(currentParams);
      setData(result.data);
      setTotal(result.total);
      setParams(currentParams);
    } catch (error) {
      console.error('加载数据失败:', error);
    } finally {
      setLoading(false);
    }
  }, [fetchData, params]);

  const refresh = useCallback(() => {
    loadData();
  }, [loadData]);

  const onPageChange = useCallback((page: number, pageSize?: number) => {
    loadData({ ...params, page, pageSize });
  }, [loadData, params]);

  const onParamsChange = useCallback((newParams: TableParams) => {
    loadData({ ...params, ...newParams, page: 1 });
  }, [loadData, params]);

  return {
    data,
    loading,
    total,
    params,
    refresh,
    onPageChange,
    onParamsChange,
  };
} 