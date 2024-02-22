import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../Components/CustomInput";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createNewblogCat, getABlogCat, updateABlogCat } from "../../features/bCat/bcategorySlice";
import { resetState } from "../../features/BlogF/blogSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";

let schema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
  
  });

const AddBlogCat = () => {
   
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const getBlogCatId = location.pathname.split("/")[3];
      const newBlogCategory = useSelector((state) => state.bCategory);

      const {
        isSuccess,
        isError,
        isLoading,
        createBlogCategory,
        blogCatName,
        updatedBlogCategory,
      } = newBlogCategory;

      useEffect(() => {
        if (getBlogCatId !== undefined) {
          dispatch(getABlogCat(getBlogCatId));
        } else {
          dispatch(resetState());
        }
      }, [getBlogCatId,dispatch]);

      useEffect(() => {
        if (isSuccess && createBlogCategory) {
          toast.success("Blog Category Added Successfullly!");
        }
        if (isSuccess && updatedBlogCategory) {
          toast.success("Blog Category Updated Successfullly!");
          navigate("/admin/blog-category-list");
        }
        if (isError) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading,createBlogCategory, navigate,updatedBlogCategory]);

      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          title: blogCatName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
          const data = { id: getBlogCatId, blogCatData: values };
          if (getBlogCatId !== undefined) {
            dispatch(updateABlogCat(data));
            dispatch(resetState());
          } else {
            dispatch(createNewblogCat(values));
            formik.resetForm();
            setTimeout(() => {
              dispatch(resetState());
            }, 300);
          }
        },
      });

    return (
        <div>
           <h3 className="text-4xl mb-4 font-bold">
           {getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category
            </h3>
           <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput 

              onCh={formik.handleChange("title")}
               onBl={formik.handleBlur("title")}
                val={formik.values.title}
                type="text" 
                i_class="py-4 px-2 w-full rounded-xl border-2 mb-2"  label="Enter Blog Category"/>
                 <div className="text-red-500">
            {formik.touched.title && formik.errors.title}
          </div>
                <div className="text-center items-center mt-5 ">
    <button 
     type="submit"
    className="btn btn-success border-0 rounded-lg px-24 uppercase">
         {getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category
        </button>
    </div>
            </form>
           </div>
        </div>
    );
};

export default AddBlogCat;