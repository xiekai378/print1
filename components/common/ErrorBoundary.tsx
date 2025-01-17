'use client';

import React from 'react';
import { Button, Result } from 'antd';
import { logger } from '@/lib/logger';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logger.error(error, `ErrorBoundary: ${errorInfo.componentStack}`);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="页面出错了"
          subTitle={this.state.error?.message || '发生了一些错误，请稍后重试'}
          extra={[
            <Button key="reload" type="primary" onClick={this.handleReload}>
              刷新页面
            </Button>,
          ]}
        />
      );
    }

    return this.props.children;
  }
} 