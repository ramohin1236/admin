import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from './../../utils/axiosConfig';



  const getProductCate = async()=>{
    const response = await axios.get(`${base_url}category/all-category`)
    return response.data;
  }

const createCategory = async (category) => {
  const response = await axios.post(`${base_url}category/`, category,config);

  return response.data;
};

const getProductCategory = async (id) => {
  const response = await axios.get(`${base_url}category/${id}`);

  return response.data;
};

const deleteProductCategory = async (id) => {
  const response = await axios.delete(`${base_url}category/${id}`);

  return response.data;
};
const updateProductCategory = async (category) => {
  console.log(category);
  const response = await axios.put(
    `${base_url}category/${category.id}`,
    { title: category.pCatData.title }
  );

  return response.data;
};
const pCategoryService = {
    getProductCate,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

export default pCategoryService;