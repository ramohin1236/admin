/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAProductCategory, getCategories, resetState } from '../features/pcategory/pcategorySlice';
import { useEffect, useState } from 'react';

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
  
  

const CategoryList = () => {

    const [open, setOpen] = useState(false);
    const [pCatId, setpCatId] = useState("");
    const showModal = (e) => {
      setOpen(true);
      setpCatId(e);
    };
  
    const hideModal = () => {
      setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(resetState());
      dispatch(getCategories());
    }, [dispatch]);
   
    const pCatStat = useSelector((state) => state.pCategory.pCategories);


    const data1 = [];
    for (let i = 0; i < pCatStat.length; i++) {
      data1.push({
        key: i + 1,
        name: pCatStat[i].title,
        action: (
          <>
            <Link
              to={`/admin/category/${pCatStat[i]._id}`}
              className=" text-xl text-blue-500"
            >
              <BiEdit />
            </Link>
            <button
              className="mt-3 text-xl text-red-500 bg-transparent border-0"
              onClick={() => showModal(pCatStat[i]._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
    console.log(data1);
    const deleteCategory = (e) => {
        dispatch(deleteAProductCategory(e));
        setOpen(false);
        setTimeout(() => {
          dispatch(getCategories());
        }, 100);
      };
    return (
        <div>
        <h3 className="text-2xl font-bold mb-4">Product Categories</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
    );
};

export default CategoryList;