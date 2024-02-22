/* eslint-disable react/no-unescaped-entities */
import "./AddBlog.css";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import CustomInput from "../../Components/CustomInput";
import ReactQuill from 'react-quill';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createBlogs, getABlog, updateABlog } from './../../features/BlogF/blogSlice';
import { getCategories, resetState } from "../../features/bCat/bcategorySlice";
import { toast } from "react-toastify";
import { Formik, useFormik } from "formik";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from './../../features/uploadF/uploadSlice';


let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    category: yup.string().required("Category is Required"),
  });
const AddBlog = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


      

      useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
      }, [dispatch]);
      const getBlogId = location.pathname.split("/")[3];
      const imgState = useSelector((state) => state.upload.images);
      const bCatState = useSelector((state) => state.bCategory.bCategories);
      const blogState = useSelector((state) => state.blogs);
      
      const {
        isSuccess,
        isError,
        isLoading,
        createdBlog,
  
        blogImages,
        updatedBlog,
      } = blogState;
      
      useEffect(() => {
        if (isSuccess && createdBlog) {
          toast.success("Blog Added Successfullly!");
        }
        if (isSuccess && updatedBlog) {
          toast.success("Blog Updated Successfullly!");
          navigate("/admin/blog-list");
        }
        if (isError) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading,createdBlog,navigate,updatedBlog]);

      const img = [];
      imgState.forEach((i) => {
        img.push({
          public_id: i.public_id,
          url: i.url,
        });
      });
      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          title:"",
          description:  "",
          category: "",
          images: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        //   if (getBlogId !== undefined) {
        //     const data = { id: getBlogId, blogData: values };
        //     dispatch(updateABlog(data));
        //     dispatch(resetState());
        //   } else {
        //     dispatch(createBlogs(values));
        //     formik.resetForm();
        //     setTimeout(() => {
        //       dispatch(resetState());
        //     }, 300);
        //   }
        },
      });
    //   useEffect(() => {
    //     if (getBlogId !== undefined) {
    //       dispatch(getABlog(getBlogId));
    //       img.push(blogImages);
    //     } else {
    //       dispatch(resetState());
    //     }
    //   }, [img,getBlogId,blogImages ,dispatch]);
    useEffect(() => {
    
        formik.values.images = img;
      }, [formik.values, img]);

     

    
    return (
        <div className="mb-4 ">
            <h3 className="text-4xl mb-4">
            {getBlogId !== undefined ? "Edit" : "Add"} Blog
                </h3>
        
            <div className="">
  <form action=""  onSubmit={formik.handleSubmit}>

    <div className="mt-4">
    <CustomInput 
     name="title"
     onCh={formik.handleChange("price")}
     onBl={formik.handleBlur("price")}
     val={formik.values.price}
    type="text" 
    i_class="py-4 px-2 w-full rounded-xl border-2" 
    label="Enter Product Price"/>

    </div>
    <div className="text-red-500">
            {formik.touched.title && formik.errors.title}
          </div>

        <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3  w-full mb-8 mt-8"
            id=""
          >
            <option value="">Select Blog Category</option>
            {bCatState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
   

          <div className="text-red-500">
            {formik.touched.category && formik.errors.category}
          </div>

    <ReactQuill 
     theme="snow" 
     name="description"
     onChange={formik.handleChange("description")}
     value={formik.values.description} />
      <div className="text-red-500">
            {formik.touched.description && formik.errors.description}
          </div>

          <div className="bg-white border-1 p-5 text-center mt-8">
           
            <Dropzone
           
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap mt-3 gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
    <div className="text-center items-center mt-5 ">
    <button 
     type="submit"
    className="btn btn-success border-0 rounded-lg px-24 uppercase">
        {getBlogId !== undefined ? "Edit" : "Add"} Blog
        </button>
    </div>
  </form>
            </div>
        </div>
    );
};

export default AddBlog;