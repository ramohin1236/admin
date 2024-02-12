import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/Customer/CustomerSlice';

const columns = [
    {
      title: 'NO.',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
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
const Customers = () => {
    const disPatch =useDispatch()
    useEffect(()=>{
        disPatch(getUsers())
    },[disPatch])
    const customerstate = useSelector((state) => state.customer.customers);
    console.log(customerstate);
    const data1 = [];
    for (let i = 0; i < customerstate.length; i++) {
      if (customerstate[i].role !== "admin") {
        data1.push({
          key:  i+0,
          name: customerstate[i].firstname + " " + customerstate[i].lastname,
          email: customerstate[i].email,
          mobile: customerstate[i].mobile,
        });
      }
    }
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Customers</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Customers;