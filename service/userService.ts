import { api } from './api-management';

export const createUser = async (user: any) => {
  try {
    const response = await api.post('/user', user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await api.get('/user', { data: { id } });
    return response.data;
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await api.delete('/user', { data: { id } });
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const updateUser = async (user: any) => {
  try {
    const response = await api.put('/user', user);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

