import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/Customer/CustomerSlice';
import productReducer from '../features/ProductR/productSlice';
import brandReducer from '../features/BrandF/brandSlice';
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import bCategoryReducer from "../features/bCat/bcategorySlice";
import colorReducer from "../features/ColorF/colorSlice";
import blogReducer from "../features/BlogF/blogSlice";
import enquiryReducer from "../features/EnquiryF/enquirySlice";
import uploadReducer from "../features/uploadF/uploadSlice";
import couponReducer from "../features/couponF/couponSlice";
export const store = configureStore({
    reducer: {
    auth: authReducer, customer:customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    color: colorReducer,
    blogs: blogReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer
    }, 
})