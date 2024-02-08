/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./Dashboard.css";
import { BsArrowDownRight } from "react-icons/bs";
import { Button, Table } from 'antd';
import { Column } from '@ant-design/plots';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

const Dashboard = () => {
    const data = [
        {
          type: 'Jan',
          sales: 38,
        },
        {
          type: 'Feb',
          sales: 52,
        },
        {
          type: 'Mar',
          sales: 61,
        },
        {
          type: 'Apr',
          sales: 145,
        },
        {
          type: 'May',
          sales: 48,
        },
        {
          type: 'Jun',
          sales: 38,
        },
        {
          type: 'Jul',
          sales: 38,
        },
        {
          type: 'Aug',
          sales: 38,
        },
        {
          type: 'Sep',
          sales: 38,
        },
        {
          type: 'Oct',
          sales: 38,
        },
        {
          type: 'Nov',
          sales: 38,
        },
        {
          type: 'Dec',
          sales: 38,
        },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return "#ffd333";
          },
        label: {
     
        //   position: 'middle',
        
          style: {
            fill: '#FFFFFF',
            opacity: 1,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Month',
          },
          sales: {
            alias: 'Income',
          },
        },
      };

    
    return (
        <div>
            <h5 className="mb-4">DAshboard</h5>
            <div className="flex justify-between items-center gap-3">
                <div className="flex flex-grow bg-white rounded-md p-3 justify-between items-end">
                    <div>
                        <h2>Total</h2>
                        <p className="text-4xl mt-5 font-semibold"> $121212</p>
                    </div>
                    <div className="flex items-end flex-col">
                        <h6 className="flex gap-2"><BsArrowDownRight />32%</h6>
                        <p>Compared To April 2024</p>
                    </div>
                </div>
                <div className="flex flex-grow bg-white rounded-md p-3 justify-between items-end">
                    <div>
                        <h2>Total</h2>
                        <p className="text-4xl mt-5 font-semibold"> $121212</p>
                    </div>
                    <div className="flex items-end flex-col ">
                        <h6 className="flex gap-2 text-red-800"><BsArrowDownRight />32%</h6>
                        <p>Compared To April 2024</p>
                    </div>
                </div>
                <div className="flex flex-grow bg-white rounded-md p-3 justify-between items-end">
                    <div>
                        <h2>Total</h2>
                        <p className="text-4xl mt-5 font-semibold"> $121212</p>
                    </div>
                    <div className="flex items-end flex-col ">
                        <h6 className="flex gap-2 text-green-800"><BsArrowDownRight />32%</h6>
                        <p>Compared To April 2024</p>
                    </div>
                </div>
            </div>
{/* pie chart for product sell details */}
            <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4">Income Statics</h3>
            <div>
            <Column {...config} />
            </div>
            </div>

            {/* Resent Orders */}
            <h3 className="text-2xl font-bold mb-4 mt-8">Resent Orders</h3>
            <div>    <Table columns={columns} dataSource={data1} /></div>
        </div>
    );
};

export default Dashboard;