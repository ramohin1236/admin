/* eslint-disable no-unused-vars */
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { deleteAColor, getColors } from '../features/ColorF/colorSlice';
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../Components/CustomModal";
import { resetState } from "../features/BrandF/brandSlice";

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
      title: "Action",
      dataIndex: "action",
    },
  ];
  
  
const ColorList = () => {

    const [open, setOpen] = useState(false);
    const [colorId, setcolorId] = useState("");
    const showModal = (e) => {
      setOpen(true);
      setcolorId(e);
    };
  
      const hideModal = () => {
      setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(resetState());
      dispatch(getColors());
    }, [dispatch]);
  
    const colorState = useSelector((state) => state.color.colors);  
    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
      data1.push({
        key: i + 1,
        name: colorState[i].title,
        action: (
          <>
            <Link
              to={`/admin/color/${colorState[i]._id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit className='text-2xl text-blue-500'/>
            </Link>
            <button
              className="ms-3 text-2xl text-red-500 bg-transparent border-0"
              onClick={() => showModal(colorState[i]._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
    const deletecolor = (e) => {
      dispatch(deleteAColor(e));
  
      setOpen(false);
      setTimeout(() => {
        dispatch(getColors());
      }, 1000);
    };
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Color-List</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deletecolor(colorId);
        }}
        title="Are you sure you want to delete this color?"
      />
        </div>
    );
};

export default ColorList;