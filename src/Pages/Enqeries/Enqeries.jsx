/* eslint-disable no-unused-vars */
import "./Enqeries.css";
import { Table } from 'antd';
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteAEnquiry, getEnquiries, resetState, updateAEnquiry } from "../../features/EnquiryF/enquirySlice";
import { Link } from "react-router-dom";
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Staus",
      dataIndex: "status",
    },
  
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  
 
const Enqeries = () => {
    const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [enqId, setenqId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setenqId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(resetState());
    dispatch(getEnquiries());
  }, [dispatch]);
  const enqState = useSelector((state) => state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < enqState.length; i++) {
    data1.push({
      key: i + 1,
      name: enqState[i].name,
      email: enqState[i].email,
      mobile: enqState[i].mobile,
      status: (
        <>
          <select
            name=""
            defaultValue={enqState[i].status ? enqState[i].status : "Submitted"}
            className="form-control form-select"
            id=""
            onChange={(e) => setEnquiryStatus(e.target.value, enqState[i]._id)}
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </>
      ),

      action: (
        <>
          <Link
            className="text-xl text-blue-500"
            to={`/admin/enquiries/${enqState[i]._id}`}
          >
            <AiOutlineEye />
          </Link>
          <button
            className="mt-5 text-xl text-red-500 bg-transparent border-0"
            onClick={() => showModal(enqState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const setEnquiryStatus = (e, i) => {
    console.log(e, i);
    const data = { id: i, enqData: e };
    dispatch(updateAEnquiry(data));
  };
  const deleteEnq = (e) => {
    dispatch(deleteAEnquiry(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getEnquiries());
    }, 100);
  };
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Enquiries</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Enqeries;