import { Order, Customer, ProductType, Material, Craft } from '@/types';

// 模拟订单数据
export const mockOrders: Order[] = [
  {
    id: 'ORD20240216001',
    customerId: 'CUST001',
    productType: '纸盒',
    parameters: {
      length: 100,
      width: 80,
      height: 30,
      material: 'M001',
      quantity: 1000,
    },
    totalPrice: 1500.00,
    status: 'pending',
    createTime: '2024-02-16T10:00:00Z',
    updateTime: '2024-02-16T10:00:00Z',
  },
  {
    id: 'ORD20240216002',
    customerId: 'CUST002',
    productType: '精装盒',
    parameters: {
      length: 200,
      width: 150,
      height: 50,
      material: 'M002',
      quantity: 500,
    },
    totalPrice: 2500.00,
    status: 'processing',
    createTime: '2024-02-16T11:00:00Z',
    updateTime: '2024-02-16T11:00:00Z',
  },
];

// 模拟客户数据
export const mockCustomers: Customer[] = [
  {
    id: 'CUST001',
    name: '示例客户1',
    contact: '张三',
    phone: '13800138001',
    address: '北京市朝阳区xxx街道',
  },
  {
    id: 'CUST002',
    name: '示例客户2',
    contact: '李四',
    phone: '13800138002',
    address: '上海市浦东新区xxx路',
  },
];

// 模拟产品类型数据
export const mockProductTypes: ProductType[] = [
  {
    id: 'PT001',
    name: '纸盒',
    parameters: [
      {
        id: 'P001',
        name: '长度',
        type: 'number',
        required: true,
      },
      {
        id: 'P002',
        name: '宽度',
        type: 'number',
        required: true,
      },
      {
        id: 'P003',
        name: '高度',
        type: 'number',
        required: true,
      },
    ],
    formula: '(length * width * height * 单价 + 工艺费) * (1 + 损耗率)',
  },
];

// 模拟材料数据
export const mockMaterials: Material[] = [
  {
    id: 'M001',
    name: '250g铜版纸',
    type: '普通纸类',
    price: 5.5,
    unit: '平方米',
    specifications: '250g/m²',
  },
  {
    id: 'M002',
    name: '1.5mm灰板',
    type: '灰板纸',
    price: 3.2,
    unit: '平方米',
    specifications: '1.5mm',
  },
];

// 模拟工艺数据
export const mockCrafts: Craft[] = [
  {
    id: 'C001',
    name: '覆哑膜',
    type: '表面工艺',
    price: 0.5,
    unit: '平方米',
  },
  {
    id: 'C002',
    name: '烫金',
    type: '烫金工艺',
    price: 0.8,
    unit: '平方厘米',
  },
];

// 模拟API调用延迟
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟API响应
export const mockApi = {
  // 获取订单列表
  getOrders: async () => {
    await delay(500);
    return mockOrders;
  },
  
  // 获取客户列表
  getCustomers: async () => {
    await delay(300);
    return mockCustomers;
  },
  
  // 获取产品类型列表
  getProductTypes: async () => {
    await delay(200);
    return mockProductTypes;
  },
  
  // 获取材料列表
  getMaterials: async () => {
    await delay(200);
    return mockMaterials;
  },
  
  // 获取工艺列表
  getCrafts: async () => {
    await delay(200);
    return mockCrafts;
  },
}; 