'use client';

import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <Spin size="large" tip="页面加载中..." />
    </LoadingWrapper>
  );
} 