/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands, resetState } from '../features/BrandF/brandSlice';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const columns = [
    {
        title: "SNo",
        dataIndex: "key",
      },
      {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Action",
        dataIndex: "action",
      },
  ];
 

const BrandList = () => {
    const [open, setOpen] = useState(false);
    const [brandId, setbrandId] = useState("");
    const showModal = (e) => {
      setOpen(true);
      setbrandId(e);
    };

    const hideModal = () => {
        setOpen(false);
      };
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(resetState());
        dispatch(getBrands());
      }, [dispatch]);

      const brandState = useSelector((state) => state.brand.brands);
  
      const data1 = [];
      for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      name: brandState[i].title,
      action: (
        <>
          <Link
            to={`/admin/brand/${brandState[i]._id}`}
            className="text-xl text-blue-500"
          >
            <BiEdit />
          </Link>
          <button
            className="mt-3 text-xl text-red-500 bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
console.log(data1);
    return (
        <div>
        <h3 className="text-2xl font-bold mb-4">Product Brand</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
    );
};

export default BrandList;