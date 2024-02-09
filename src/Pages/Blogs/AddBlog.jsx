import "./AddBlog.css";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import CustomInput from "../../Components/CustomInput";
import ReactQuill from 'react-quill';
// import { Stepper } from 'react-form-stepper';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const AddBlog = () => {
    const [desc, setDesc]= useState(0);
    const handleDesc =(e)=>{
        setDesc(e)
  console.log(e);
    }
    return (
        <div className="mb-4 ">
            <h3 className="text-4xl mb-4">Add Blogs</h3>
            {/* <Stepper
  steps={[{ label: 'Add Blog Details' }, { label: 'Upload Images' }, { label: 'Finish' }]}
  activeStep={2}
/> */}
            <div className="">
  <form action="">
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
    <div className="mt-4">
    <CustomInput type="text" i_class="py-4 px-2 w-full rounded-xl border-2" label="Enter Blog Title"/>
    </div>
    <select className='form-control py-4 mb-2 selectt' name="" id="">
        <option  value="">
            Select Blog Category
        </option>
    </select>
    <ReactQuill theme="snow" value={desc} onChange={(evt)=>{handleDesc(evt)}} />
    <div className="text-center items-center mt-5 ">
    <button className="btn btn-success border-0 rounded-lg px-24 uppercase">Add Blog</button>
    </div>
  </form>
            </div>
        </div>
    );
};

export default AddBlog;