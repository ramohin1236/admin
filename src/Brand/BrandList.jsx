/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from '../Components/CustomModal';
import { deleteABrand, getBrands, resetState } from '../features/BrandF/brandSlice';


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
            to={`/admin/add-brand/${brandState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit className='text-2xl text-blue-500'/>
          </Link>
          <button
            className="ms-3 text-2xl text-red-500 bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiFillDelete className='text-2xl text-red-500'/>
          </button>
        </>
      ),
    });
  }
  const deleteBrand = (e) => {
    dispatch(deleteABrand(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getBrands());
    }, 1000);
  };
    return (
        <div>
        <h3 className="text-2xl font-bold mb-4">Product Brand</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
            deleteBrand(brandId);
        }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
    );
};

export default BrandList;