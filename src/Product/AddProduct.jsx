import "./AddProduct.css";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import ReactQuill from 'react-quill';
// import { Stepper } from 'react-form-stepper';
// import { InboxOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
import CustomInput from '../Components/CustomInput';
import { createProducts, resetState } from './../features/ProductR/ProductSlice';
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from './../features/BrandF/brandSlice';
import { getCategories } from './../features/pcategory/pcategorySlice';
import { getColors } from './../features/ColorF/colorSlice';


// const { Dragger } = Upload;
// const props = {
//   name: 'file',
//   multiple: true,
//   action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };

let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    price: yup.number().required("Price is Required"),
    brand: yup.string().required("Brand is Required"),
    category: yup.string().required("Category is Required"),
    tags: yup.string().required("Tag is Required"),
    color: yup
      .array()
      .min(1, "Pick at least one color")
      .required("Color is Required"),
    quantity: yup.number().required("Quantity is Required"),
  });



const AddProduct = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState([]);
    const [brand, setBrand] = useState([]);
    const formik = useFormik({
        initialValues: {
          title: "",
          description: "",
          price: "",
          brand: "",
          category: "",
          tags: "",
          color: "",
          quantity: "",
          images: "",
        },validationSchema: schema,
        onSubmit: (values) => {
          dispatch(createProducts(values));
          formik.resetForm();
          setColor(null);
          setTimeout(() => {
            dispatch(resetState());
          }, 3000);
        },
      });
    const [desc, setDesc]= useState(0);
    const handleDesc =(e)=>{
        setDesc(e)
  console.log(e);
 }

 useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, [dispatch]);
  const brandState = useSelector((state) => state.brand.brands);

    return (
        <div className="mb-4 ">
            <h3 className="text-4xl mb-4">Add Products</h3>
      
            <div className="">
  <form  onSubmit={formik.handleSubmit} className="flex gap-3 flex-col ">
 
    <div className="mt-4">
    <p className='text-2xl font-bold mt-12'>Product Title</p>
    <CustomInput 
    name="title" 
    onCh={formik.handleChange("title")} 
    onBl={formik.handleBlur("title")}
    val={formik.values.title}
    type="text"
    i_class="py-4 px-2 w-full rounded-xl border-2"
    label="Enter Product Title"
     
     />
    <div className="error text-red-600">
            {formik.touched.title && formik.errors.title}
    </div>
    </div>
  
 
 <div className='mb-5'>
 <p className='text-2xl font-bold mt-12'>Product Description</p>
 <ReactQuill 
 theme="snow" 
 name="description"
 onChange={formik.handleChange("description")}
 val={formik.values.description}/>
  <div className="error text-red-600">
            {formik.touched.description && formik.errors.description}
    </div>
 </div>

 <p className='text-2xl font-bold mt-12'>Product Price</p>
    <CustomInput 
     name="price"
     onChng={formik.handleChange("price")}
     onBlr={formik.handleBlur("price")}
     val={formik.values.price}
    type="number" 
    i_class="py-4 px-2 w-full rounded-xl border-2" 
    label="Enter Product Price"/>

<div className="error text-red-600">
    
            {formik.touched.price && formik.errors.price}
    </div>

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
    <select
     onChange={formik.handleChange("brand")}
     onBlur={formik.handleBlur("brand")}
     value={formik.values.brand}
    className='form-control py-4 mb-2 selectt' name="" id="">
        <option  value="">
           Select Brand
        </option>
        {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
    </select>

    <p className='text-2xl font-bold mt-12'>Upload Product Images</p>
    {/* <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger> */}
   
    <div className="text-center items-center mt-5 ">
    <button className="btn btn-success font-bold text-white border-0 rounded-lg px-24 uppercase">Add product</button>
    </div>
  </form>
            </div>
        </div>
    );
};

export default AddProduct;