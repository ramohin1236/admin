import { Table } from 'antd';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
    {
      title: 'NO.',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: "i-phone",
      status: `London, Park Lane no. ${i}`,
    });
  }

const ProductList = () => {
    return (
        <div>
        <h3 className="text-2xl font-bold mb-4">Product List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
    );
};

export default ProductList;