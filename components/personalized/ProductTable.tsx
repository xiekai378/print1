'use client';

import { Table, Button } from 'antd';
import { FC } from 'react';

interface ProductTableProps {
  type: 'paper-box' | 'hardcover' | 'book';
}

const columns = [
  {
    title: '产品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '规格参数',
    dataIndex: 'specs',
    key: 'specs',
  },
  {
    title: '适用材料',
    dataIndex: 'materials',
    key: 'materials',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a>删除</a>
      </span>
    ),
  },
];

const mockData = {
  'paper-box': [
    {
      key: '1',
      name: '天地盖',
      specs: '常规尺寸',
      materials: '铜版纸、灰板',
    },
  ],
  'hardcover': [
    {
      key: '1',
      name: '精装书壳',
      specs: 'A4标准',
      materials: '布料、灰板',
    },
  ],
  'book': [
    {
      key: '1',
      name: '胶装画册',
      specs: 'A4/A5可选',
      materials: '铜版纸、哑粉纸',
    },
  ],
};

export const ProductTable: FC<ProductTableProps> = ({ type }) => {
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary">新增{
          type === 'paper-box' ? '纸盒' :
          type === 'hardcover' ? '精装盒' : '书刊'
        }</Button>
      </div>
      <Table columns={columns} dataSource={mockData[type]} />
    </div>
  );
}; 