/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./MainLayout.css";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineBgColors, AiOutlineDashboard, AiOutlinePicLeft, AiOutlinePicRight, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaBloggerB, FaClipboardList } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { SiBrandfolder } from "react-icons/si";
import { Layout, Menu, Button, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate =useNavigate()
    return (
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
            <h2 className="text-sky-700 text-2xl font-bold text-center py-3">
                <span className="sm-logo">CJC</span>
                <span className="lg-logo">CNC JULLY CUTTING</span>
                </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
        if(key== "signout"){

        }
        else{
         navigate(key)
        }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className="text-lg"/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart />,
              label: 'Catalog',
              children:[
                {
                    key: 'product',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Add Product',
                  },
                {
                    key: 'product list',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Product List',
                  },
                {
                    key: 'brand',
                    icon: <SiBrandfolder />,
                    label: 'Brand',
                  },
                {
                    key: 'brandlist',
                    icon: <SiBrandfolder />,
                    label: 'Brand List',
                  },
                {
                    key: 'category',
                    icon: <BiCategory />,
                    label: 'Category',
                  },
                {
                    key: 'categorylist',
                    icon: <BiCategory />,
                    label: 'Category List',
                  },
                {
                    key: 'color',
                    icon: <AiOutlineBgColors />,
                    label: 'Color',
                  },
                {
                    key: 'colorlist',
                    icon:<AiOutlineBgColors />,
                    label: 'Color List',
                  },
              ]
            },
            {
                key: 'orders',
                icon: <FaClipboardList />,
                label: 'Orders',
              },
            {
                key: 'blog',
                icon: <FaBloggerB />,
                label: 'Blogs',
                children:[
                    {
                        key: 'addblog',
                        icon: <ImBlog />,
                        label: 'Add Blog',
                    },
                    {
                        key: 'blog-list',
                        icon: <FaBloggerB />,
                        label: 'Blog List',
                    },
                    {
                        key: 'blog-category',
                        icon: <ImBlog />,
                        label: ' Add Blogs Category',
                    },
                    {
                        key: 'blog-category-list',
                        icon: <FaBloggerB />,
                        label: 'Blog Category List',
                    },
                ]
              },
              {
                key: 'enquiries',
                icon: <AiOutlineUser />,
                label: 'Enquiries',
              },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
        className="flex justify-between px-4"
        //   style={{
        //     padding: 0,
        //     // background: white,
        //   }}
        >
          <Button
          className="icon"
            type="text"
            icon={collapsed ? <AiOutlinePicLeft /> : <AiOutlinePicRight />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="flex gap-3 items-center">
          <div className="relative">
            <IoIosNotifications  className="text-white text-4xl"/>
          <span className="badge bg-warning rounded-full p-2 ml-4 -top-2 absolute">3</span>
          </div>

          <div className="flex gap-3 items-center">
            <div>
                <img className="w-16 rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocKk6ggBxxHH6DBtjHWTg9FHwWBoROdtoPO6fqA5zJV1KQ=s260-c-no" alt="" />
            </div>
            <div>
                <h5 className="text-white mb-0">RA Mohin</h5>
                <p className="text-white mb-0">mohinr26@gmail.com</p>
            </div>
          </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
        
          }}
        >
           
            <Outlet/>
  
         
        </Content>
      </Layout>
    </Layout>
    );
};

export default MainLayout;