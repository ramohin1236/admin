import CustomInput from "../Components/CustomInput";

import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { createBrand, getABrand, resetState, updateABrand } from "../features/BrandF/brandSlice";





let schema = yup.object().shape({
    title: yup.string().required("Brand Name is Required"),
  });
const AddBrand = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getBrandId = location.pathname.split("/")[3];
    const newBrand = useSelector((state) => state.brand);
    const {
        isSuccess,
        isError,
        isLoading,
        createdBrand,
        brandName,
        updatedBrand,
      } = newBrand;
      useEffect(() => {
        if (getBrandId !== undefined) {
          dispatch(getABrand(getBrandId));
        } else {
          dispatch(resetState());
        }
      }, [getBrandId,dispatch]);

   useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated Successfullly!");
      navigate("/admin/list-brand");
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading,createdBrand, navigate, updatedBrand]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: brandName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
          if (getBrandId !== undefined) {
            const data = { id: getBrandId, brandData: values };
            dispatch(updateABrand(data));
            dispatch(resetState());
          } else {
            dispatch(createBrand(values));
            formik.resetForm();
            setTimeout(() => {
              dispatch(resetState());
            }, 300);
          }
        },
      });

    return (
        <div>
           <h3 className="text-4xl mb-4 font-bold">Add Brand</h3>
           <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput
                type="text"
                name="title"
                onCh={formik.handleChange("title")}
                onBl={formik.handleBlur("title")}
                val={formik.values.title}
                label="Enter Brand"
                id="brand"
                i_class="py-4 px-2 w-full rounded-xl border-2 mb-2"  />

<div className="text-red-500">
            {formik.touched.title && formik.errors.title}
          </div>
                <div className="text-center items-center mt-5 ">
    <button type="submit" className="btn btn-success border-0 rounded-lg px-24 uppercase">{getBrandId !== undefined ? "Edit" : "Add"} Brand</button>
    </div>
            </form>
           </div>
        </div>
    );
};

export default AddBrand;