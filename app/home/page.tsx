'use client';

import { Card, Row, Col, Statistic } from 'antd';
import { 
  PrinterOutlined, 
  UserOutlined, 
  SettingOutlined,
  DollarOutlined 
} from '@ant-design/icons';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #1f1f1f;
  margin: 24px 16px;
  font-weight: 500;
`;

export default function HomePage() {
  return (
    <div>
      <Title>印刷报价系统</Title>
      <Row gutter={16}>
        <Col span={6}>
          <StyledCard>
            <Statistic
              title="今日订单"
              value={11}
              prefix={<PrinterOutlined />}
            />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Statistic
              title="活跃客户"
              value={93}
              prefix={<UserOutlined />}
            />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Statistic
              title="产品类型"
              value={25}
              prefix={<SettingOutlined />}
            />
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Statistic
              title="本月营收"
              value={234567}
              prefix={<DollarOutlined />}
            />
          </StyledCard>
        </Col>
      </Row>
      
      <Row gutter={16}>
        <Col span={8}>
          <StyledCard title="快速导航">
            <p>• 个性化配置</p>
            <p>• 订单管理</p>
            <p>• 客户管理</p>
            <p>• 数据管理</p>
          </StyledCard>
        </Col>
        <Col span={8}>
          <StyledCard title="系统公告">
            <p>• 系统已更新到最新版本</p>
            <p>• 新增多项报价模板</p>
            <p>• 优化了计算性能</p>
          </StyledCard>
        </Col>
        <Col span={8}>
          <StyledCard title="使用帮助">
            <p>• 如何创建新订单</p>
            <p>• 如何管理客户信息</p>
            <p>• 如何配置报价公式</p>
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
} 