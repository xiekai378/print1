# 印刷报价系统

基于Next.js的现代化印刷报价系统。

## 项目结构

```
print-quote/
├── app/                    # Next.js 13+ App Router
│   ├── home/              # 首页模块
│   ├── personalized/      # 个性化配置模块
│   ├── order-customer/    # 订单与客户管理模块
│   ├── data/             # 数据管理模块
│   ├── financial/        # 财务管理模块
│   └── user/             # 用户中心模块
├── components/           # 共享组件
│   ├── common/          # 通用组件
│   └── layout/          # 布局组件
├── lib/                 # 工具函数和配置
├── store/              # Redux状态管理
│   ├── features/       # Redux切片
│   ├── provider.tsx    # Redux Provider
│   └── store.ts       # Redux配置
├── types/              # TypeScript类型定义
└── public/            # 静态资源
```

## 技术栈

- Next.js 13+
- TypeScript
- Redux Toolkit
- Ant Design
- Styled Components
- Tailwind CSS

## 开发说明

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 生产环境构建

```bash
npm run build
```

### 生产环境运行

```bash
npm start
```

## 模块说明

### 首页 (H0)
- 核心报价功能
- 产品类型选择
- 参数输入
- 报价展示

### 个性化配置 (P0)
- 报价公式配置
- 损耗调整
- 产品配置
- 报价模板管理

### 订单与客户管理 (OC0)
- 订单列表
- 客户列表
- 订单详情

### 数据管理 (D0)
- 产品类型管理
- 材料管理
- 工艺管理
- 机器管理

### 财务管理 (F0)
- 加工费结算
- 加工费列表
- 对账单
- 客户结算
- 客户结算列表
- 客户付款单

### 用户中心 (U0)
- 个人设置
- 用户激励
