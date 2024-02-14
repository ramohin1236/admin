import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/Customer/CustomerSlice';
import productReducer from '../../src/features/ProductR/productSlice';
import brandReducer from '../features/BrandF/brandSlice';
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import colorReducer from "../features/ColorF/colorSlice";
import blogReducer from "../features/BlogF/blogSlice";
import enquiryReducer from "../features/EnquiryF/enquirySlice";
export const store = configureStore({
    reducer: {
    auth: authReducer, customer:customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    color: colorReducer,
    blogs: blogReducer,
    enquiry: enquiryReducer,
    }, 
})