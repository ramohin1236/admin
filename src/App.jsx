
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ForgetPassword from './Pages/ForgetPasword/ForgetPassword';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Enqeries from './Pages/Enqeries/Enqeries';
import BlogList from './Pages/Blogs/BlogList';
import BlogCategoryList from './Pages/Blogs/BlogCategoryList';
import Orders from './Pages/Orders/Orders';
import Customers from './Pages/Customers/Customers';
import ColorList from './Color/ColorList';
import CategoryList from './Category/CategoryList';
import BrandList from './Brand/BrandList';
import ProductList from './Product/ProductList';
import AddBlog from './Pages/Blogs/AddBlog';
import AddBlogCat from './Pages/Blogs/AddBlogCat';
import AddColor from './Color/AddColor';
import AddCategory from './Category/AddCategory';
import AddBrand from './Brand/AddBrand';
import AddProduct from './Product/AddProduct';
import AddCoupon from './Pages/Coupon/AddCoupon';
import CouponList from './Pages/Coupon/CouponList';


function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Login/>}/>  
           <Route path='/reset-password' element={<ResetPassword/>}/>  
           <Route path='/forgot-password' element={<ForgetPassword/>}/>  
           <Route path='/admin' element={<MainLayout/>}>
               <Route index element={<Dashboard/>}/> 
               <Route path='enquiries' element={<Enqeries/>}></Route>
               <Route path='blog-list' element={<BlogList/>}></Route>
               <Route path='blog-category-list' element={<BlogCategoryList/>}></Route>
               <Route path='orders' element={<Orders/>}></Route>
               <Route path='coupon' element={<AddCoupon/>}></Route>
               <Route path='coupon-list' element={<CouponList/>}></Route>
               <Route path='customers' element={<Customers/>}></Route>
               <Route path='colorlist' element={<ColorList/>}></Route>
               <Route path='category-list' element={<CategoryList/>}></Route>
               
               <Route path='add-brand' element={<AddBrand/>}></Route>
               <Route path='add-brand/:id' element={<AddBrand/>}></Route>
               <Route path='brand-list' element={<BrandList/>}></Route>
               <Route path='product-list' element={<ProductList/>}></Route>
               <Route path='add-product' element={<AddProduct/>}></Route>
               <Route path='add-blog' element={<AddBlog/>}></Route>
               <Route path='blog-category' element={<AddBlogCat/>}></Route>
               <Route path='add-color' element={<AddColor/>}></Route>
               <Route path='add-category' element={<AddCategory/>}></Route>
            </Route>  
          
        </Routes>
    </BrowserRouter>
  )
}

export default App
