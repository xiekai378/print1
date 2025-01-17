'use client';

import { useEffect } from 'react';
import { Button, Result } from 'antd';
import { logger } from '@/lib/logger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error(error, 'Global Error Page');
  }, [error]);

  return (
    <Result
      status="error"
      title="页面出错了"
      subTitle={error.message || '发生了一些错误，请稍后重试'}
      extra={[
        <Button key="retry" type="primary" onClick={reset}>
          重试
        </Button>,
      ]}
    />
  );
} 