/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import "./AddProduct.css";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import ReactQuill from 'react-quill';
import CustomInput from '../Components/CustomInput';
import { createProducts, resetState } from './../features/ProductR/ProductSlice';
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from './../features/BrandF/brandSlice';
import { getCategories } from './../features/pcategory/pcategorySlice';
import { getColors } from './../features/ColorF/colorSlice';
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/uploadF/uploadSlice";
import { RxCross2 } from "react-icons/rx";


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
 
 const handleColors = (e) => {
    setColor(e);
    console.log(color);
  };
console.log(formik.values);
 useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, [dispatch]);
  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });
    return (
        <div className="mb-4 ">
            <h3 className="text-4xl mb-4">Add Products</h3>
      
            <div className="">
  <form type="submit"   onSubmit={formik.handleSubmit} className="flex gap-3 flex-col ">
 
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
     onCh={formik.handleChange("price")}
     onBl={formik.handleBlur("price")}
     val={formik.values.price}
    type="number" 
    i_class="py-4 px-2 w-full rounded-xl border-2" 
    label="Enter Product Price"/>

<div className="error text-red-600">
    
            {formik.touched.price && formik.errors.price}
    </div>
 <p className='text-2xl font-bold mt-12'>Product Quantity</p>
    <CustomInput 
      name="quantity"
      onCh={formik.handleChange("quantity")}
      onBl={formik.handleBlur("quantity")}
      val={formik.values.quantity}
    type="number" 
    i_class="py-4 px-2 w-full rounded-xl border-2" 
    label="Enter Product Price"/>

<div className="text-red-500">
            {formik.touched.quantity && formik.errors.quantity}
          </div>

   

    <p className='text-2xl font-bold mt-12'>Select Category</p>
    <select
     onChange={formik.handleChange("category")}
     onBlur={formik.handleBlur("category")}
     value={formik.values.category}
    className='form-control py-4 mb-2 selectt' name="" id="">
        
        <option  value="">
            Select Category
        </option>
        {catState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
    </select>
    <div className="error text-red-500">
            {formik.touched.category && formik.errors.category}
          </div>
    <p className='text-2xl font-bold mt-12'>Select Color</p>
    <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select colors"
            defaultValue={color}
            onChange={(i) => handleColors(i)}
            options={coloropt}
          />
          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>
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
    <div className="error text-red-500">
            {formik.touched.brand && formik.errors.brand}
          </div>
    <p className='text-2xl font-bold mt-12'>Upload Product Images</p>
    <div className="bg-white border-1 p-20 text-center">
    <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
     </div>
     <div className="showimages flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className="relative" key={j}>
                    <RxCross2  type="button" className="absolute text-2xl cursor-pointer"
                       onClick={() => dispatch(delImg(i.public_id))}
                    style={{ top: "30px", right: "10px" }}/>
                 
                  <img src={i.url} alt="" width={300} height={300} />
                </div>
              );
            })}
          </div>
    <div className="text-center items-center mt-5 ">
    <button
     type="submit"
     className="btn btn-success font-bold text-white border-0 rounded-lg px-24 uppercase">Add product</button>
    </div>
  </form>
            </div>
        </div>
    );
};

export default AddProduct;