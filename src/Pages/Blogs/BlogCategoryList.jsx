/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import { deleteABlogCat, getCategories, resetState } from '../../features/BlogCatF/blogCatSlice';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  

const BlogCategoryList = () => {
    const [open, setOpen] = useState(false);
  const [blogCatId, setblogCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setblogCatId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, [dispatch]);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  console.log(bCatState);
  const data1 = [];
  for (let i = 0; i < bCatState.length; i++) {
    data1.push({
      key: i + 1,
      name: bCatState[i].title,
      action: (
        <>
          <Link
            to={`/admin/blog-category/${bCatState[i]._id}`}
            className=" text-xl text-blue-500"
          >
            <BiEdit />
          </Link>
          <button
            className="text-xl mt-5 text-red-500 bg-transparent border-0"
            onClick={() => showModal(bCatState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const deleteBlogCategory = (e) => {
    dispatch(deleteABlogCat(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Blog Categories</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default BlogCategoryList;