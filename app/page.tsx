'use client'

import { Card } from 'antd'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  margin: 24px;
`

export default function Home() {
  return (
    <StyledCard title="印刷报价系统">
      <p>欢迎使用印刷报价系统</p>
      <p>这里是系统的首页，您可以：</p>
      <ul>
        <li>开始新的报价</li>
        <li>查看历史报价</li>
        <li>管理客户信息</li>
        <li>查看订单状态</li>
      </ul>
    </StyledCard>
  )
}
