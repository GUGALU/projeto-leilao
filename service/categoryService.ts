import { api } from './api-management';

export const createCategory = async (category: any) => {
  try {
    const response = await api.post('/category', category);
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await api.get('/category');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const response = await api.get(`/category/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};

export const updateCategory = async (id: number, category: any) => {
  try {
    const response = await api.put(`/category/${id}`, category);
    return response.data;
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error);
    throw error;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await api.delete(`/category/${id}`);
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
};
