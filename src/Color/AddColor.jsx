import {  useDispatch, useSelector } from "react-redux";
import CustomInput from "../Components/CustomInput";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createColor, getAColor, updateAColor } from "../features/ColorF/colorSlice";
import { resetState } from "../features/BrandF/brandSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";



let schema = yup.object().shape({
    title: yup.string().required("Color is Required"),
  });
const AddColor= () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const getColorId = location.pathname.split("/")[3];
    const newColor = useSelector((state) => state.color);
    const {
      isSuccess,
      isError,
      isLoading,
      createdColor,
      updatedColor,
      colorName,
    } = newColor;
    useEffect(() => {
      if (getColorId !== undefined) {
        dispatch(getAColor(getColorId));
      } else {
        dispatch(resetState());
      }
    }, [getColorId,dispatch]);
    useEffect(() => {
      if (isSuccess && createdColor) {
        toast.success("Color Added Successfullly!");
      }
      if (isSuccess && updatedColor) {
        toast.success("Color Updated Successfullly!");
        navigate("/admin/list-color");
      }
      if (isError) {
        toast.error("Something Went Wrong!");
      }
    }, [isSuccess, isError, isLoading, createdColor,navigate, updatedColor]);
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        title: colorName || "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        if (getColorId !== undefined) {
          const data = { id: getColorId, colorData: values };
          dispatch(updateAColor(data));
          dispatch(resetState());
        } else {
          dispatch(createColor(values));
          formik.resetForm();
          setTimeout(() => {
            dispatch(resetState());
          }, 300);
        }
      },
    });

    return (
        <div>
           <h3 className="text-4xl mb-4 font-bold">  {getColorId !== undefined ? "Edit" : "Add"} Color</h3>
           <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput
                onCh={formik.handleChange("title")}
                onBl={formik.handleBlur("title")}
                val={formik.values.title}
                id="color"
                 type="color" 
                 i_class=" px-2 w-full rounded-xl border-2 mb-2"  
                 label="Enter Color"/>

            <div className="error text-red-500">
            {formik.touched.title && formik.errors.title}
          </div>
                <div className="text-center items-center mt-5 ">
    <button
     type="submit"
    className="btn btn-success border-0 rounded-lg px-24 uppercase">  {getColorId !== undefined ? "Edit" : "Add"} Color</button>
    </div>
            </form>
           </div>
        </div>
    );
};

export default AddColor;