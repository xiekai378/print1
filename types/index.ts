// 产品类型
export interface ProductType {
  id: string;
  name: string;
  parameters: Parameter[];
  formula: string;
}

// 参数定义
export interface Parameter {
  id: string;
  name: string;
  type: 'number' | 'text' | 'select' | 'checkbox';
  options?: string[];
  required: boolean;
}

// 客户信息
export interface Customer {
  id: string;
  name: string;
  contact: string;
  phone: string;
  address: string;
}

// 订单信息
export interface Order {
  id: string;
  customerId: string;
  productType: string;
  parameters: Record<string, any>;
  totalPrice: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createTime: string;
  updateTime: string;
}

// 材料信息
export interface Material {
  id: string;
  name: string;
  type: string;
  price: number;
  unit: string;
  specifications: string;
}

// 工艺信息
export interface Craft {
  id: string;
  name: string;
  type: string;
  price: number;
  unit: string;
}

// 机器信息
export interface Machine {
  id: string;
  name: string;
  type: string;
  capacity: number;
  unit: string;
} 