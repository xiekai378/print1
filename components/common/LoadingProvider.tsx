'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

interface LoadingContextType {
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  showLoading: () => {},
  hideLoading: () => {},
});

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  const showLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      {loading && (
        <LoadingWrapper>
          <Spin size="large" tip="加载中..." />
        </LoadingWrapper>
      )}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext); 