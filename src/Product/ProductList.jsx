import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../features/ProductR/productSlice';
const columns = [
    {
        title: "SNo",
        dataIndex: "key",
      },
      {
        title: "Title",
        dataIndex: "title",
        sorter: (a, b) => a.title.length - b.title.length,
      },
      {
        title: "Brand",
        dataIndex: "brand",
        sorter: (a, b) => a.brand.length - b.brand.length,
      },
      {
        title: "Category",
        dataIndex: "category",
        sorter: (a, b) => a.category.length - b.category.length,
      },
      {
        title: "Color",
        dataIndex: "color",
      },
      {
        title: "Price",
        dataIndex: "price",
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: "Action",
        dataIndex: "action",
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

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    const productState = useSelector((state) => state.product.products);
    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
      data1.push({
        key: i + 1,
        title: productState[i].title,
        brand: productState[i].brand,
        category: productState[i].category,
        color: productState[i].color,
        price: `${productState[i].price}`,
        action: (
          <>
            <Link to="/" className=" text-xl text-blue-400">
              <BiEdit />
            </Link>
            <Link className="ms-3 text-xl text-red-500" to="/">
              <AiFillDelete />
            </Link>
          </>
        ),
      });
    }

console.log(data1);

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