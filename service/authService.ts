import { api } from './api-management';

export const authenticateUser = async (authRequest: any) => {
  try {
    const response = await api.post('/auth/login', authRequest);
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

export const sendValidationCode = async (email: string) => {
  try {
    const response = await api.post('/auth/send-code', { email });
    return response.data;
  } catch (error) {
    console.error('Error sending validation code:', error);
    throw error;
  }
};

export const activateUser = async (email: string, token: string) => {
  try {
    const response = await api.post('/auth/activate', { email, token });
    return response.data;
  } catch (error) {
    console.error('Error activating user:', error);
    throw error;
  }
};

export const sendResetPasswordLink = async (email: string) => {
  try {
    const response = await api.post('/auth/send-reset-link', { email });
    return response.data;
  } catch (error) {
    console.error('Error sending reset password link:', error);
    throw error;
  }
};

export const resetPassword = async (email: string, token: string, newPassword: string) => {
  try {
    const response = await api.post('/auth/reset-password', { email, token, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

export const registerUser = async (user: any) => {
  try {
    const response = await api.post('/auth/register', user);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const response = await api.post('/auth/send-code', email);
    return response.data;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
}