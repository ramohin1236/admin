import "./AddProduct.css";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

import ReactQuill from 'react-quill';
// import { Stepper } from 'react-form-stepper';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import CustomInput from '../Components/CustomInput';
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

const AddProduct = () => {
    const [desc, setDesc]= useState(0);
    const handleDesc =(e)=>{
        setDesc(e)
  console.log(e);
    }
    return (
        <div className="mb-4 ">
            <h3 className="text-4xl mb-4">Add Products</h3>
      
            <div className="">
  <form action="">
 
    <div className="mt-4">
    <p className='text-2xl font-bold mt-12'>Product Title</p>
    <CustomInput type="text" i_class="py-4 px-2 w-full rounded-xl border-2" label="Enter Product Title"/>
  
    </div>
  
 
 <div className='mb-5'>
 <p className='text-2xl font-bold mt-12'>Product Description</p>
 <ReactQuill theme="snow" value={desc} onChange={(evt)=>{handleDesc(evt)}} />
 </div>
 <p className='text-2xl font-bold mt-12'>Product Price</p>
    <CustomInput type="number" i_class="py-4 px-2 w-full rounded-xl border-2" label="Enter Product Price"/>
    <p className='text-2xl font-bold mt-12'>Select Category</p>
    <select className='form-control py-4 mb-2 selectt' name="" id="">
        
        <option  value="">
            Select Category
        </option>
    </select>
    <p className='text-2xl font-bold mt-12'>Select Color</p>
    <select className='form-control py-4 mb-2 selectt' name="" id="">
   
        <option  value="">
            Select Color
        </option>
    </select>
    <p className='text-2xl font-bold mt-12'>Select Brand</p>
    <select className='form-control py-4 mb-2 selectt' name="" id="">
        <option  value="">
           Select Brand
        </option>
    </select>

    <p className='text-2xl font-bold mt-12'>Upload Product Images</p>
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
   
    <div className="text-center items-center mt-5 ">
    <button className="btn btn-success font-bold text-white border-0 rounded-lg px-24 uppercase">Add product</button>
    </div>
  </form>
            </div>
        </div>
    );
};

export default AddProduct;