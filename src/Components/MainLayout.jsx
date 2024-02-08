/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./MainLayout.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { AiOutlineBgColors, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaBloggerB, FaClipboardList, FaListAlt } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import { SiBrandfolder } from "react-icons/si";
import { Layout, Menu, Button, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate =useNavigate()
    return (
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
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
              icon: <AiOutlineDashboard className="text-lg	"/>,
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
                        icon: <FaBloggerB />,
                        label: 'Add Blog',
                    },
                    {
                        key: 'blog-list',
                        icon: <FaBloggerB />,
                        label: 'Blog List',
                    },
                    {
                        key: 'blog-category',
                        icon: <FaBloggerB />,
                        label: ' Add Blogs Category',
                    },
                    {
                        key: 'blog-category-list',
                        icon: <FaBloggerB />,
                        label: 'Blog Category List',
                    },
                ]
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            // background: white,
          }}
        >
          <Button
          className="icon"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
    );
};

export default MainLayout;