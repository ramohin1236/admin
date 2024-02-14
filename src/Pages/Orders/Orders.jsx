/* eslint-disable react/jsx-key */

import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  
  

const Orders = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const orderState = useSelector((state) => state.auth.orders);
//   console.log(orderState.orderby.firstname);

  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].orderby.firstname,
      product: orderState[i].products.map((i,j)=>{
        return (
            <div key={j}>
               <ul >
                  <li>{i.product.title}</li>
               </ul>
            </div>
        )
      }),
    //   product: (
    //     <Link to={`/admin/order/${orderState[i].orderby._id}`}>
    //       View Orders
    //     </Link>
    //   ),
      amount: orderState[i].paymentIntent.amount,
      date: new Date(orderState[i].createdAt).toLocaleString(),
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
    return (
        <div>
            <h3 className="text-4xl font-bold mb-4">Orders</h3>
            <div >
            <Table  columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Orders;