'use client';

import { Card, Table, Progress, Button } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

const StyledProgressCard = styled(Card)`
  margin-bottom: 24px;
  .ant-card-body {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const ProgressItem = styled.div`
  text-align: center;
  .title {
    margin-bottom: 8px;
    color: #666;
  }
`;

const columns = [
  {
    title: '奖励时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '奖励类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '奖励内容',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
];

const mockData = [
  {
    key: '1',
    date: '2024-02-16',
    type: '订单完成奖励',
    content: '完成10个订单奖励',
    status: '已发放',
  },
];

export default function RewardsPage() {
  return (
    <>
      <StyledProgressCard title="本月目标">
        <ProgressItem>
          <div className="title">订单完成率</div>
          <Progress type="circle" percent={75} />
        </ProgressItem>
        <ProgressItem>
          <div className="title">客户满意度</div>
          <Progress type="circle" percent={90} strokeColor="#52c41a" />
        </ProgressItem>
        <ProgressItem>
          <div className="title">业绩达成率</div>
          <Progress type="circle" percent={85} strokeColor="#1890ff" />
        </ProgressItem>
      </StyledProgressCard>

      <StyledCard 
        title="奖励记录"
        extra={<Button type="primary">查看规则</Button>}
      >
        <Table 
          columns={columns} 
          dataSource={mockData}
          pagination={{
            total: 100,
            pageSize: 10,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      </StyledCard>
    </>
  );
} 