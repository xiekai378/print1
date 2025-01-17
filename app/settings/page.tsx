'use client';

import { Card, Form, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 24px;
`;

export default function SettingsPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <StyledCard title="个人设置">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '请输入邮箱' },
            { type: 'email', message: '请输入有效的邮箱地址' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            保存设置
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  );
} 