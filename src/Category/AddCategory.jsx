import { useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../Components/CustomInput";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createCategory, getAProductCategory, updateAProductCategory } from "../features/pcategory/pcategorySlice";
import { resetState } from "../features/BrandF/brandSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";



let schema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
  });
const AddCategory = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const getPCatId = location.pathname.split("/")[3];
    const navigate = useNavigate();
    const newCategory = useSelector((state) => state.pCategory);
    const {
      isSuccess,
      isError,
      isLoading,
      createdCategory,
      categoryName,
      updatedCategory,
    } = newCategory;
    useEffect(() => {
        if (getPCatId !== undefined) {
          dispatch(getAProductCategory(getPCatId));
        } else {
          dispatch(resetState());
        }
      }, [getPCatId,dispatch]);
      useEffect(() => {
        if (isSuccess && createdCategory) {
          toast.success("Category Added Successfullly!");
        }
        if (isSuccess && updatedCategory) {
          toast.success("Category Updated Successfullly!");
          navigate("/admin/list-category");
        }
        if (isError) {
          toast.error("Something Went Wrong!");
        }
      }, [isSuccess, isError, isLoading,createdCategory,navigate,updatedCategory]);

      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          title: categoryName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
          if (getPCatId !== undefined) {
            const data = { id: getPCatId, pCatData: values };
            dispatch(updateAProductCategory(data));
            dispatch(resetState());
          } else {
            dispatch(createCategory(values));
            formik.resetForm();
            setTimeout(() => {
              dispatch(resetState());
            }, 300);
          }
        },
      });
    return (
        <div>
           <h3 className="text-4xl mb-4 font-bold">Add Category</h3>
           <div>
            <form onSubmit={formik.handleSubmit}>
                <CustomInput 
                type="text"
                label="Enter Product Category"
                onCh={formik.handleChange("title")}
                onBl={formik.handleBlur("title")}
                val={formik.values.title}
                id="brand"
                i_class="py-4 px-2 w-full rounded-xl border-2 mb-2"  />

            <div className="text-red-500">
            {formik.touched.title && formik.errors.title}
          </div>

                <div className="text-center items-center mt-5 ">
    <button 
      type="submit"
    className="btn btn-success border-0 rounded-lg px-24 uppercase">  {getPCatId !== undefined ? "Edit" : "Add"} Category</button>
    </div>
            </form>
           </div>
        </div>
    );
};

export default AddCategory;